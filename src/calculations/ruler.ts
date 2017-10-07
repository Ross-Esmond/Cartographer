import stop from "./stop";
import gap from "./gap";

export default class extends gap {
	measure: () => number;
	constructor(low: stop, high: stop, measure: () => number) {
		super(low, high);

		this.measure = measure;
	}
	calculate() {
		return this.measure();
	}
}
