import source from "./invalid.tsx?raw";
import { Switch } from "@pisagor/solid";

export function Invalid() {
  return <Switch invalid />;
}

export { source as InvalidSource };
