import { PasswordInput } from "@pisagor/react/password-input";
import { useState } from "react";

export function ControlledVisibility() {
  const [visible, setVisible] = useState(false);

  return (
    <PasswordInput
      onVisibilityChange={(details) => setVisible(details.visible)}
      placeholder="Enter password"
      visible={visible}
    />
  );
}
