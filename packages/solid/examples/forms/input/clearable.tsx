import { Input } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Clearable() {
  const [value, setValue] = createSignal("Hello world");

  return (
    <Input
      clearable
      onChange={({ target }) => setValue(target.value)}
      placeholder="Type to search..."
      value={value()}
    />
  );
}
