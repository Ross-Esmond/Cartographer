import gap from "./gap";

export default class stop {
	Tracer: symbol;

	Lower: gap[];
	Higher: gap[];

	constructor(public name: string) {
		this.Tracer = Symbol(name);
	}

	addLower(gap: gap) {
		this.Lower.push(gap);
	}

	addHigher(gap: gap) {
		this.Higher.push(gap);
	}
}