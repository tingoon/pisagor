import { useState } from "react";
import { PasswordInput } from "..";

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
