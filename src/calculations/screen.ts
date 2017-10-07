import Rectangle from "../shapes/rectangle";
import ruler from "../calculations/ruler";
import portal from "../graphing/portal";
import renderable from "../items/renderable";
import Spacer from "./spacer";

export default class implements renderable {
	bounds: Rectangle;
	width: number;
	height: number;
	scrollX = 0;
	scrollY = 0;
	element: HTMLElement;
	constructor(portal: portal) {
		this.bounds = new Rectangle(portal);
		new ruler(this.bounds.Left, this.bounds.Right, () => this.width);
		new ruler(this.bounds.Top, this.bounds.Bottom, () => this.height);

		this.bounds.Left.setAsOrigin();
		this.bounds.Top.setAsOrigin();
		this.bounds.Back.setAsOrigin();

		var graphOuter = portal.getGraphRectangle("outer");

		new Spacer(this.bounds.Left, graphOuter.Left, 0);
		new Spacer(this.bounds.Top, graphOuter.Top, 0);
		new Spacer(this.bounds.Back, graphOuter.Back, 0);
	}
	preprocess(graph: HTMLElement) {
		var rect = graph.getBoundingClientRect();

		this.width = rect.width;
		this.height = rect.height;
	}
}