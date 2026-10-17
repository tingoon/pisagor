import source from "./default.tsx?raw";
import { Autocomplete } from "@pisagor/solid";

export function Default() {
  return <Autocomplete items={["React", "Solid", "Vue", "Svelte"]} />;
}

export { source as DefaultSource };
