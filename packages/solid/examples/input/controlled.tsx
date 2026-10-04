/** @jsxImportSource solid-js */

import { Input } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal("");

  return (
    <Input
      onChange={({ target }) => setValue(target.value)}
      placeholder="Enter your message"
      value={value()}
    />
  );
}
