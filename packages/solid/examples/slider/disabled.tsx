import source from "./disabled.tsx?raw";
import { Slider } from "@pisagor/solid";

export function Disabled() {
  return <Slider defaultValue={[50]} disabled />;
}

export { source as DisabledSource };
