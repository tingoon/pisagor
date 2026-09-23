import { useState } from "react";
import { Input } from "..";

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
