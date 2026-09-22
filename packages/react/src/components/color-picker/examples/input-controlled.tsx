import { Input, parseColor } from "@pisagor/react";
import { useState } from "react";
import { ColorPicker } from "..";
export function InputControlled() {
  const [value, setValue] = useState("#eb5e41");

  return (
    <div className="flex flex-col gap-2">
      <ColorPicker onValueChange={setValue} value={value}>
        <ColorPicker.Control>
          <ColorPicker.Input asChild>
            <Input />
          </ColorPicker.Input>
        </ColorPicker.Control>
      </ColorPicker>
      <p className="text-center text-muted-foreground text-sm">
        {parseColor(value).toString("hex")}
      </p>
    </div>
  );
}
