import Slot from "./slot";
import { Relation, Direction } from "./relation";

export default class FixedRelation extends Relation {
	readonly Length: number;

	constructor(Low: Slot, High: Slot, Length: number) {
		super(Low, High);
	}
	
	calc(direction: Direction): void {
		switch (direction)
		{
			case Direction.higher:
			
		}
	}
}