/** @jsxImportSource solid-js */

import { PasswordInput } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function AutoHide() {
  const HIDE_DELAY_MS = 3000;
  const [visible, setVisible] = createSignal(false);

  const handleVisibilityChange = (visible: boolean) => {
    setVisible(visible);

    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, HIDE_DELAY_MS);
    }
  };

  return (
    <PasswordInput
      onVisibilityChange={({ visible }) => handleVisibilityChange(visible)}
      placeholder="Enter password"
      visible={visible()}
    />
  );
}
