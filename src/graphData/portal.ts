import Rectangle from "../shapes/rectangle";
import Concept from "./concept";

class ItemCollection {
	cache = new Map<string, any>();
	get<T>(role: string, type: string): T {
		if (!this.cache.has(role))
			this.cache.set(role, this.create(type));
		return this.cache.get(role) as T;
	}
	create(type: string) {
		switch (type) {
			case "rectangle": return new Rectangle();
		}
	}
}

export default class {
	cache = new Map<symbol, ItemCollection>();
	get<T>(concept: Concept, role: string, type: string): T {
		if (!this.cache.has(concept.Tracer))
			this.cache.set(concept.Tracer, new ItemCollection());
		
		return this.cache.get(concept.Tracer).get(role, type);
	}
}