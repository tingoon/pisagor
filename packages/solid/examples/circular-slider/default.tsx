import source from "./default.tsx?raw";
import { CircularSlider } from "@pisagor/solid";

export function Default() {
  return <CircularSlider defaultValue={45} />;
}

export { source as DefaultSource };
