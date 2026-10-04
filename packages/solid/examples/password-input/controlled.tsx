/** @jsxImportSource solid-js */

import { PasswordInput } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const [password, setPassword] = createSignal("");

  return (
    <PasswordInput
      onChange={(event) => setPassword(event.target.value)}
      placeholder="Enter password"
      value={password()}
    />
  );
}
