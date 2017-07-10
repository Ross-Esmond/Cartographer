import Slot from "./slot";

export default class Text {
	constructor(public name: string) {

	}
	getHorizontalEdges(): Number[] {
		var leftEdge = new Number(`${this.name}.leftEdge`);
		var rightEdge = new Number(`${this.name}.rightEdge`);

		leftEdge.attachItemHigher(rightEdge);

		return [leftEdge, rightEdge];
	}
	getVerticalEdges(): Number[] {
		var topEdge = new Number(`${this.name}.topEdge`);
		var bottomEdge = new Number(`${this.name}.bottomEdge`);

		topEdge.attachItemHigher(bottomEdge);

		return [topEdge, bottomEdge];
	}
	getEdges(): EdgeSet {
		return new EdgeSet(
			this.getHorizontalEdges(),
			this.getVerticalEdges()
		);
	}
}