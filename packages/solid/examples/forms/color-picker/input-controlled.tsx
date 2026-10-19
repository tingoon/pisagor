import { ColorPicker, Input, parseColor } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function InputControlled() {
  const [value, setValue] = createSignal("#eb5e41");

  return (
    <div class="flex flex-col gap-2">
      <ColorPicker.Root onValueChange={setValue} value={value()}>
        <ColorPicker.Control>
          <ColorPicker.Input asChild={(props) => <Input {...props()} />} />
        </ColorPicker.Control>
      </ColorPicker.Root>
      <p class="text-muted-foreground text-center text-sm">
        {parseColor(value()).toString("hex")}
      </p>
    </div>
  );
}
