import source from "./default.tsx?raw";
import { Combobox } from "@pisagor/solid";

export function Default() {
  return <Combobox items={["React", "Solid", "Vue", "Svelte"]} />;
}

export { source as DefaultSource };
