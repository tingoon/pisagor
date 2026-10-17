import source from "./clearable.tsx?raw";
import { Input } from "@pisagor/react";
import { useState } from "react";

export function Clearable() {
  const [value, setValue] = useState("Hello world");

  return (
    <Input
      clearable
      onChange={({ target }) => setValue(target.value)}
      placeholder="Type to search..."
      value={value}
    />
  );
}

export { source as ClearableSource };
