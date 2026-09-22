import { Slider } from "..";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Slider defaultValue={[40]} label="Primary" showValue variant="primary" />
      <Slider defaultValue={[40]} label="Secondary" showValue variant="secondary" />
    </div>
  );
}
