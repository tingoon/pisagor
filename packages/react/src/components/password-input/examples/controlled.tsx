import { useState } from "react";
import { PasswordInput } from "..";

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
