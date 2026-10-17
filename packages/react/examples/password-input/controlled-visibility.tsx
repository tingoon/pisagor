import source from "./controlled-visibility.tsx?raw";
import { PasswordInput } from "@pisagor/react";
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

export { source as ControlledVisibilitySource };
