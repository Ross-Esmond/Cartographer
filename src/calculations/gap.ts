import stop from "./stop";

export default abstract class gap {
	readonly low: stop;
	readonly high: stop;
	constructor(low: stop, high: stop) {
		this.low = low;
		this.low.addHigher(this);
		this.high = high;
		this.high.addLower(this);
	}
	flatten(): gap[] {
		return [ this ];
	}
	abstract calculate(): number;
}