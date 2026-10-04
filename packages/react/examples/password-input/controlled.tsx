import { PasswordInput } from "@pisagor/react/password-input";
import { useState } from "react";

export function Controlled() {
  const [password, setPassword] = useState("");

  return (
    <PasswordInput
      onChange={(event) => setPassword(event.target.value)}
      placeholder="Enter password"
      value={password}
    />
  );
}
