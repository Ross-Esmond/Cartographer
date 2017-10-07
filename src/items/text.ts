import Rectangle from "../shapes/rectangle";
import ruler from "../calculations/ruler";
import spacer from "../calculations/spacer";
import portal from "../graphing/portal";
import renderable from "./renderable";

export default class implements renderable {
	bounds: Rectangle;
	constructor(portal: portal, public text: string) {
		this.bounds = new Rectangle(portal);
		var width = Math.round(text.length * 9.63281);
		new spacer(this.bounds.Left, this.bounds.Right, width);
		new spacer(this.bounds.Top, this.bounds.Bottom, 19);
	}
	render(graph: HTMLElement) {
		var el = document.createElement("div");

		el.textContent = this.text;
		el.style.position = "absolute";
		el.style.visibility = "hidden";

		el.style.visibility = "";

		el.style.left = this.bounds.Left.calculate() + "px";
		el.style.top = this.bounds.Top.calculate() + "px";
		el.style.zIndex = this.bounds.Back.calculate().toString();

		graph.appendChild(el);
	}
}
