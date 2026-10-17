import { Slider } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <Slider defaultValue={[40]} label="Primary" showValue variant="primary" />
      <Slider
        defaultValue={[40]}
        label="Secondary"
        showValue
        variant="secondary"
      />
    </div>
  );
}
