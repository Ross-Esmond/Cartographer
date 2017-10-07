import Concept from "./concept";
import Relation from "./relation";
import stackedNode from "../blueprints/stackedNode";
import Portal from "./portal";
import { forEach } from "lodash";
import Screen from "../calculations/screen";

export interface GraphData {
	Concepts: Concept[];
	Relations: Relation[];
}

export default class Graph {
	canvas: HTMLElement;
	constructor(canvas: HTMLElement) {
		this.canvas = canvas;
	}
	update() {
		var portal = new Portal();
		var concept = new Concept("whatever", {});
		var result = stackedNode(portal, concept);

		var rootOuter = portal.getTargetRectangle(concept.Tracer, "outer");

		portal.setGraphRectangle(rootOuter, "outer");

		var screen = new Screen(portal);

		result.push(screen);

		forEach(result,
			item => {
				if ("preprocess" in item)
					item.preprocess(this.canvas);
			});

		forEach(result,
			item => {
				if ("render" in item)
					item.render(this.canvas);
			});
	}
}
