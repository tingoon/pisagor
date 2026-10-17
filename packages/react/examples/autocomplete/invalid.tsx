import source from "./invalid.tsx?raw";
import { Autocomplete } from "@pisagor/react";

export function Invalid() {
  return (
    <Autocomplete
      invalid
      items={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
      ]}
    />
  );
}

export { source as InvalidSource };
