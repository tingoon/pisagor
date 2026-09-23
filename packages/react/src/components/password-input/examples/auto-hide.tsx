import { useState } from "react";
import { PasswordInput } from "..";

export function AutoHide() {
  const HIDE_DELAY_MS = 3000;
  const [visible, setVisible] = useState(false);

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
      visible={visible}
    />
  );
}
