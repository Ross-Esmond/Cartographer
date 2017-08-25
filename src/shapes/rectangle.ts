import stop from "../calculations/stop";

export default class {
	Name: string;
	Left: stop;
	Top: stop;
	Right: stop;
	Bottom: stop;

	constructor() {
		this.Left = new stop(`${this.Name} -> Left`);
		this.Top = new stop(`${this.Name} -> Top`);
		this.Right = new stop(`${this.Name} -> Right`);
		this.Bottom = new stop(`${this.Name} -> Bottom`);
	}
}