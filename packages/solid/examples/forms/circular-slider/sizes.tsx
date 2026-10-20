import { CircularSlider } from "@pisagor/solid";
import { For } from "solid-js";

export function Sizes() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <For each={[120, 180, 240]}>
        {(size) => (
          <CircularSlider
            aria-label="Angle"
            defaultValue={45}
            size={size}
            showValue
            valueSuffix="°"
          />
        )}
      </For>
    </div>
  );
}
