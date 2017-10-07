import Rectangle from "../shapes/rectangle";
import portal from "../graphing/portal";
import renderable from "./renderable";

export default class implements renderable {
	bounds: Rectangle;

	constructor(portal: portal) {
		this.bounds = new Rectangle(portal);
	}
	
	render(graph: Element) {
		var el = document.createElement("div");

		el.style.background = "#DDD";
		el.style.position = "absolute";

		var left = this.bounds.Left.calculate();
		var top = this.bounds.Top.calculate();

		el.style.left = left + "px";
		el.style.top = top + "px";
		el.style.width = this.bounds.Right.calculate() - left + "px";
		el.style.height = this.bounds.Bottom.calculate() - top + "px";
		el.style.zIndex = this.bounds.Back.calculate().toString();

		graph.appendChild(el);
	}
}