import type { RippleOptions } from "./constants.js";
import {
	INEVENTS,
	OUTEVENTS,
	CLASS,
	CENTER_CLASS,
	addEvent,
	removeEvent,
	findFurthestPoint,
} from "./constants";

function ripple(el: HTMLElement, options?: RippleOptions) {
	const addClassIfMissing = () => {
		if (!el.classList.contains(CLASS)) {
			el.classList.add(CLASS);
		}

		if (options?.center) {
			el.classList.add(CENTER_CLASS);
		}
	};

	addClassIfMissing();

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
	};

	setOptions(options);

	const createRipple = (e: PointerEvent) => {
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

		ripple.style.left = e.clientX - rect.left - radius + "px";
		ripple.style.top = e.clientY - rect.top - radius + "px";
		ripple.style.width = ripple.style.height = radius * 2 + "px";

		el.appendChild(ripple);

		const removeRipple = () => {
			if (ripple !== null) {
				ripple.style.opacity = "0";

				setTimeout(
					() => {
						ripple.remove();
					},
					options?.duration ? options.duration * 1000 : 1000
				);
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
