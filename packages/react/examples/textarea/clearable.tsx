import { Textarea } from "@pisagor/react";
import { useState } from "react";

export function Clearable() {
  const [value, setValue] = useState("");

  return (
    <Textarea
      clearable
      onChange={({ target }) => setValue(target.value)}
      placeholder="Type to clear"
      value={value}
    />
  );
}
