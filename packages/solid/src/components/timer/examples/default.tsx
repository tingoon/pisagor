import { Timer } from "../index";

export function Default() {
  return <Timer countdown isControlsVisible startMs={60_000} units={["minutes", "seconds"]} />;
}
