import { Timer } from "@pisagor/react";

export function Default() {
  return <Timer autoStart units={["days", "hours", "minutes", "seconds"]} />;
}
