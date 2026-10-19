import { Timer } from "@pisagor/solid";

export function Default() {
  return <Timer autoStart units={["days", "hours", "minutes", "seconds"]} />;
}
