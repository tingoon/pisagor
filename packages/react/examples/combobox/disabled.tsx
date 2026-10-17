import source from "./disabled.tsx?raw";
import { Combobox } from "@pisagor/react";

export function Disabled() {
  return (
    <Combobox
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
