const INEVENTS = ["pointerdown", "touchstart"];
const OUTEVENTS = [
	"pointerup",
	"mouseleave",
	"dragleave",
	"touchmove",
	"touchend",
	"touchcancel",
];

const CLASS = "ripple-effect";
const CENTER_CLASS = "ripple-center";

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
	let x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
	let y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
	let d = Math.hypot(x - (clickPointX - offsetX), y - (clickPointY - offsetY));
	return d;
};

export {
	INEVENTS,
	OUTEVENTS,
	CLASS,
	CENTER_CLASS,
	addEvent,
	removeEvent,
	findFurthestPoint,
};
