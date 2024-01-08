const INEVENTS = ["pointerdown", "touchstart"];
const OUTEVENTS = [
	"pointerup",
	"mouseleave",
	"dragleave",
	"touchmove",
	"touchend",
	"touchcancel",
];

const ATTR_NAME = "svelte-ripple-effect-ready";
const ATTR_CENTER_NAME = "ripple-center";

export interface RippleOptions {
	center?: boolean;
	color?: string;
	/**
	 * Duration in seconds
	 */
	duration?: number;
	/**
	 * Max width of the ripple
	 */
	maxRadius?: number;
}

const addEvent = (
	el: HTMLElement,
	event: string,
	callback: (...args: any[]) => void
) => {
	el.addEventListener(event, callback);
};

const removeEvent = (
	el: HTMLElement,
	event: string,
	callback: (...args: any[]) => void
) => {
	el.removeEventListener(event, callback);
};

const findFurthestPoint = (
	clickPointX: number,
	elementWidth: number,
	offsetX: number,
	clickPointY: number,
	elementHeight: number,
	offsetY: number
) => {
	const x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
	const y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
	const d = Math.hypot(
		x - (clickPointX - offsetX),
		y - (clickPointY - offsetY)
	);

	return d;
};

export {
	INEVENTS,
	OUTEVENTS,
	ATTR_NAME,
	ATTR_CENTER_NAME,
	addEvent,
	removeEvent,
	findFurthestPoint,
};
