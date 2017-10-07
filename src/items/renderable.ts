export default interface graphItem {
	preprocess?(graph: Element): void;
	render?(graph: Element): void;
}
