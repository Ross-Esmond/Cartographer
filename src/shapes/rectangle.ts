import stop from "../calculations/stop";
import Portal from "../graphing/portal";
import shape from "./shape";

export default class Rectangle implements shape {
	Name: string;
	Left: stop;
	Top: stop;
	Right: stop;
	Bottom: stop;
	Back: stop;
	Front: stop;

	constructor(portal: Portal) {
		this.Left = new stop(portal);
		this.Top = new stop(portal);
		this.Right = new stop(portal);
		this.Bottom = new stop(portal);
		this.Back = new stop(portal);
		this.Front = new stop(portal);
	}

	combine(portal: Portal, rectangle: Rectangle) {
		portal.combine(this.Left, rectangle.Left);
		portal.combine(this.Top, rectangle.Top);
		portal.combine(this.Right, rectangle.Right);
		portal.combine(this.Bottom, rectangle.Bottom);
		portal.combine(this.Back, rectangle.Back);
		portal.combine(this.Front, rectangle.Front);
	}
}