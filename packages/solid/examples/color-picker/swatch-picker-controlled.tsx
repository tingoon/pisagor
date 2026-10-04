/** @jsxImportSource solid-js */

import { ColorPicker, parseColor } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function SwatchPickerControlled() {
  const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
  const [value, setValue] = createSignal("#0485F7");

  return (
    <div class="flex flex-col items-center gap-2">
      <ColorPicker inline onValueChange={setValue} value={value()}>
        <ColorPicker.SwatchGroup>
          {swatches.map((color) => (
            <ColorPicker.SwatchTrigger value={color}>
              <ColorPicker.Swatch value={color}>
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          ))}
        </ColorPicker.SwatchGroup>
      </ColorPicker>
      <p class="text-center text-muted-foreground text-sm">
        {parseColor(value).toString("hex")}
      </p>
    </div>
  );
}
