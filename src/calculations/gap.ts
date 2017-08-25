import stop from "./stop";

export default abstract class gap {
	readonly Low: stop;
	readonly High: stop;

	constructor(Low: stop, High: stop) {
		this.Low = Low;
		this.High = High;
	}

	abstract flatten(): gap[];
}