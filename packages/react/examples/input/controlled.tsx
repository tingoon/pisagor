import { Input } from "@pisagor/react/input";
import { useState } from "react";

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
