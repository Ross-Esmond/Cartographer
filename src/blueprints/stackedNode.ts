import Concept from "../graphData/concept";
import Relation from "../graphData/relation";
import Portal from "../graphData/portal";
import Rectangle from "../shapes/rectangle";

export default function (
	portal: Portal,
	root: Concept,
	relations: Relation[],
	children: Concept[])
{
	var bounds = portal.get<Rectangle>(root, "bounds", "rectangle");

	bounds.Left
}