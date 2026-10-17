import source from "./disabled.tsx?raw";
import { Autocomplete } from "@pisagor/react";

export function Disabled() {
  return (
    <Autocomplete
      disabled
      items={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
      ]}
    />
  );
}

export { source as DisabledSource };
