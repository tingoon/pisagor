/** @jsxImportSource solid-js */

import { PasswordInput } from "@pisagor/solid/password-input";
import { createSignal } from "solid-js";
export function ControlledVisibility() {
  const [visible, setVisible] = createSignal(false);

  return (
    <PasswordInput
      onVisibilityChange={(details) => setVisible(details.visible)}
      placeholder="Enter password"
      visible={visible()}
    />
  );
}
