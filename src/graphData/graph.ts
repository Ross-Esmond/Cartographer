import Concept from "./concept";
import Relation from "./relation";

export interface GraphData {
	Concepts: Concept[];
	Relations: Relation[];
}

export class Graph {
	update(data: GraphData) {
		
	}
}

export default function (element: HTMLElement) {
	return new Graph();
}
