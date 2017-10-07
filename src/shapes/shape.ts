import Portal from "../graphing/portal";

export default interface shape {
	combine: (portal: Portal, shape: shape) => void;
}
