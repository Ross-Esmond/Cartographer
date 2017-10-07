import gap from "./gap";
import portal from "../graphing/portal";

export default class stop {
	portal: portal;
	tracer: symbol;

	constructor(portal: portal) {
		this.portal = portal;
		this.tracer = portal.create();
	}

	setAsOrigin() {
		this.retrieve().setAsOrigin();
	}

	update(tracer: symbol) {
		this.tracer = tracer;
	}

	retrieve() {
		return this.portal.retrieve(this.tracer);
	}

	addLower(gap: gap) {
		this.retrieve().lower.push(gap);
	}

	addHigher(gap: gap) {
		this.retrieve().higher.push(gap);
	}

	calculate(): number {
		return this.retrieve().calculate();
	}
}