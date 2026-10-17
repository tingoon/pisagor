import source from "./step.tsx?raw";
import { Slider } from "@pisagor/solid";

export function Step() {
  return (
    <Slider
      defaultValue={[0]}
      label="Storage size"
      markerInterval={1}
      markerLabels={["5GB", "25GB", "50GB"]}
      max={2}
      min={0}
      showMarkers
    />
  );
}

export { source as StepSource };
