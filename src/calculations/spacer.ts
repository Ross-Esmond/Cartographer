import stop from "./stop";
import gap from "./gap";

export default class extends gap {
	distance: number;
	constructor(low: stop, high: stop, distance: number) {
		super(low, high);
		this.distance = distance;
	}
	calculate() {
		return this.distance;
	}
}