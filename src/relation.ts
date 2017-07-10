import Slot from "./slot";

export enum Direction {
	lower,
	higher
}

export abstract class Relation {
	readonly Low: Slot;
	readonly High: Slot;

	constructor(Low: Slot, High: Slot) {
		this.Low = Low;
		this.High = High;
	}

	abstract calc(direction: Direction): void;
}