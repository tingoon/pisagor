import { Textarea } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Clearable() {
  const [value, setValue] = createSignal("");

  return (
    <Textarea
      clearable
      onValueChange={setValue}
      placeholder="Type to clear"
      value={value()}
    />
  );
}
