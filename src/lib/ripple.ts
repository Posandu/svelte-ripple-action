import type { RippleOptions } from "./constants.js";
import {
	INEVENTS,
	OUTEVENTS,
	ATTR_NAME,
	ATTR_CENTER_NAME,
	addEvent,
	removeEvent,
	findFurthestPoint,
} from "./constants";
import { onMount } from "svelte";

function ripple(el: HTMLElement, options?: RippleOptions) {
	const addClassIfMissing = () => {
		if (!el.getAttribute(ATTR_NAME)) {
			el.setAttribute(ATTR_NAME, "");
		}

		if (options?.center) {
			el.setAttribute(ATTR_CENTER_NAME, "");
		} else {
			el.removeAttribute(ATTR_CENTER_NAME);
		}
	};

	onMount(() => {
		addClassIfMissing();
	});

	let maximumRadius = 0;

	const setOptions = (options: RippleOptions) => {
		/**
		 * Add custom --ripple-color if set
		 */
		if (options?.color) {
			el.style.setProperty("--ripple-color", options.color);
		}

		/**
		 * Add custom --ripple-duration if set
		 */
		if (options?.duration) {
			el.style.setProperty("--ripple-duration", options.duration + "s");
		}

		/**
		 * If maxWidth is set
		 */
		if (options?.maxRadius) {
			maximumRadius = options.maxRadius;
		}
	};

	setOptions(options);

	const createRipple = (e: PointerEvent) => {
		if (options?.disabled) return;

		e.stopPropagation();

		addClassIfMissing();

		const rect = el.getBoundingClientRect();
		const radius = findFurthestPoint(
			e.clientX,
			el.offsetWidth,
			rect.left,
			e.clientY,
			el.offsetHeight,
			rect.top
		);

		const ripple = document.createElement("div");
		ripple.classList.add("ripple");

		let size = radius * 2;
		let top = e.clientY - rect.top - radius;
		let left = e.clientX - rect.left - radius;

		if (maximumRadius && size > maximumRadius) {
			size = maximumRadius * 2;
			top = e.clientY - rect.top - maximumRadius;
			left = e.clientX - rect.left - maximumRadius;
		}

		ripple.style.left = left + "px";
		ripple.style.top = top + "px";

		ripple.style.width = ripple.style.height = size + "px";

		el.appendChild(ripple);

		const removeRipple = () => {
			const timeOutDuration = options?.duration
				? options.duration * 1000
				: 1000;

			if (ripple !== null) {
				setTimeout(() => {
					ripple.style.opacity = "0";
				}, timeOutDuration / 4);

				setTimeout(() => {
					ripple.remove();
				}, timeOutDuration);
			}
		};

		OUTEVENTS.forEach((event) => {
			addEvent(el, event, removeRipple);
		});
	};

	INEVENTS.forEach((event) => {
		addEvent(el, event, createRipple);
	});

	return {
		destroy: () => {
			INEVENTS.forEach((event) => {
				removeEvent(el, event, createRipple);
			});
		},
		update: (newOptions: RippleOptions) => {
			options = newOptions;

			setOptions(newOptions);
		},
	};
}

export { ripple };
