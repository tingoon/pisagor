import { parseColor } from "@pisagor/react";
import { useState } from "react";
import { ColorPicker } from "..";
export function SwatchPickerControlled() {
  const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
  const [value, setValue] = useState("#0485F7");

  return (
    <div className="flex flex-col items-center gap-2">
      <ColorPicker inline onValueChange={setValue} value={value}>
        <ColorPicker.SwatchGroup>
          {swatches.map((color) => (
            <ColorPicker.SwatchTrigger key={color} value={color}>
              <ColorPicker.Swatch value={color}>
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          ))}
        </ColorPicker.SwatchGroup>
      </ColorPicker>
      <p className="text-center text-muted-foreground text-sm">
        {parseColor(value).toString("hex")}
      </p>
    </div>
  );
}
