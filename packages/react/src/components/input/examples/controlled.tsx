import { useState } from "react";
import { Input } from "..";

export function Controlled() {
  const [value, setValue] = useState("");

  return (
    <Input
      onChange={({ target }) => setValue(target.value)}
      placeholder="Enter your message"
      value={value}
    />
  );
}
