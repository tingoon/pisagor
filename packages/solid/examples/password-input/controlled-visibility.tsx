import { PasswordInput } from "@pisagor/solid";
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
