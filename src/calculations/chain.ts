import gap from "./gap";
import { first, last, flatten, map } from "lodash";
import { lowHigh } from "./lowHigh";

export default class extends gap {
	gaps: gap[];

	constructor(flexIndex: number, ...gaps: gap[]) {
		super(first(gaps).Low, last(gaps).High);
		
		this.gaps = flatten(map(gaps, gap => gap.flatten()));
	}

	flatten() {
		return this.gaps;
	}
}