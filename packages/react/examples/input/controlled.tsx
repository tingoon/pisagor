import source from "./controlled.tsx?raw";
import { Input } from "@pisagor/react";
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

export { source as ControlledSource };
