import { Slider } from "@pisagor/solid";

export function MinMax() {
  return (
    <Slider defaultValue={[50]} label="Volume" max={200} min={0} showValue />
  );
}
