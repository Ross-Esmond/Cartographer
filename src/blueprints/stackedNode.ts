import Concept from "../graphing/concept";
import Relation from "../graphing/relation";
import Portal from "../graphing/portal";
import Rectangle from "../shapes/rectangle";
import gap from "../calculations/gap";
import spacer from "../calculations/spacer";
import Text from "../items/text";
import Box from "../items/box";
import renderable from "../items/renderable";

export default function (portal: Portal, concept: Concept): renderable[]
{
	var bounds = new Rectangle(portal);

	portal.setTargetRectangle(concept.Tracer, bounds, "outer");

	var backdrop = new Box(portal);
	var title = new Text(portal, "thing");

	portal.setTargetRectangle(concept.Tracer, title.bounds, "focus");

	portal.combine(bounds.Left, backdrop.bounds.Left);
	portal.combine(bounds.Top, backdrop.bounds.Top);
	portal.combine(bounds.Right, backdrop.bounds.Right);
	portal.combine(bounds.Bottom, backdrop.bounds.Bottom);
	portal.combine(bounds.Back, backdrop.bounds.Back);

	new spacer(bounds.Left, title.bounds.Left, 10);
	new spacer(bounds.Top, title.bounds.Top, 10);
	new spacer(bounds.Back, title.bounds.Back, 1);
	new spacer(title.bounds.Right, bounds.Right, 10);
	new spacer(title.bounds.Bottom, bounds.Bottom, 10);
	new spacer(bounds.Back, backdrop.bounds.Front, 0);
	new spacer(backdrop.bounds.Front, title.bounds.Back, 1);
	new spacer(title.bounds.Back, title.bounds.Front, 0);
	new spacer(title.bounds.Front, bounds.Front, 0);

	return [backdrop, title];
}