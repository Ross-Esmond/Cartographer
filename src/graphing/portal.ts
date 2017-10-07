import Concept from "./concept";
import stop from "../calculations/stop";
import gap from "../calculations/gap";
import { reduce, forEach } from "lodash";
import shape from "../shapes/shape";
import Rectangle from "../shapes/rectangle";

export class hold {
	completed = false;
	value: number;

	constructor(
		public lower: gap[] = new Array<gap>(),
		public higher: gap[] = new Array<gap>()) {
		
	}

	calculate() {
		if (!this.completed)
		{
			this.value = reduce(this.lower,
			 	(highest, gap) => {
					var spot = gap.low.calculate();
					var split = gap.calculate();
					return spot + split > highest ? spot + split : highest;
				}, Number.NEGATIVE_INFINITY);

			this.completed = true;
		}

		return this.value;
	}

	setAsOrigin() {
		this.value = 0;
		this.completed = true;
	}
}

class RoleCache {
	rectangles = new Map<string, Rectangle>();
}

export default class portal {
	universal = new RoleCache();
	roles = new Map<symbol, RoleCache>();
	cache = new Map<symbol, hold>();
	get(tracer: symbol): hold {
		return this.retrieve(tracer);
	}
	create() {
		return this.stash(new hold());
	}
	combine(...stops: stop[]) {
		var combo = reduce<symbol, hold>(
			stops.map(stop => stop.tracer),
			(result, tracer) => {
				var current = this.retrieve(tracer);
				return new hold(
					result.lower.concat(current.lower),
					result.higher.concat(current.higher));
			},
			new hold()
		);

		var tracer = this.stash(combo);
		stops.forEach(stop => stop.update(tracer));
		return tracer;
	}
	stash(holder: hold) {
		var tracer = Symbol();
		this.cache.set(tracer, holder);
		return tracer;
	}
	retrieve(tracer: symbol): hold {
		return this.cache.get(tracer);
	}
	getOrSet<K, V>(cache: Map<K, V>, key: K, setter: () => V) {
		if (cache.has(key)) {
			return cache.get(key);
		} else {
			var value = setter();
			cache.set(key, value);
			return value;
		}
	}
	getGraphRectangle(role: string) {
		return this.getOrSet(this.universal.rectangles,
			role, () => new Rectangle(this));
	}
	setGraphRectangle(rectangle: Rectangle, ...roles: string[]) {
		roles.forEach(role => {
			if (this.universal.rectangles.has(role))
				rectangle.combine(this, this.universal.rectangles.get(role));
			else
				this.universal.rectangles.set(role, rectangle);
		});
	}
	getTargetRectangle(tracer: symbol, role: string) {
		var cache = this.getOrSet(this.roles,
			tracer, () => new RoleCache());

		return this.getOrSet(cache.rectangles,
			role, () => new Rectangle(this));
	}
	setTargetRectangle(tracer: symbol, rectangle: Rectangle, ...roles: string[]) {
		var cache = this.getOrSet(this.roles,
			tracer, () => new RoleCache());

		roles.forEach(role => {
			if (cache.rectangles.has(role))
				rectangle.combine(this, cache.rectangles.get(role));
			else
				cache.rectangles.set(role, rectangle);
		});
	}
}