import gap from "./gap";
import { first, last, flatten, map, reduce } from "lodash";
import { lowHigh } from "./lowHigh";

export default class extends gap {
	gaps: gap[];
	constructor(flexIndex: number, ...gaps: gap[]) {
		super(first(gaps).low, last(gaps).high);
		
		this.gaps = flatten(map(gaps, gap => gap.flatten()));
	}
	flatten() {
		return this.gaps;
	}
	calculate() {
		return reduce(this.gaps, (sum, gap) => gap.calculate() + sum, 0);
	}
}