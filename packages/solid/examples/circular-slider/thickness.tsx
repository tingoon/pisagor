import source from "./thickness.tsx?raw";
import { CircularSlider } from "@pisagor/solid";

export function Thickness() {
  return <CircularSlider aria-label="Angle" defaultValue={45} thickness={14} />;
}

export { source as ThicknessSource };
