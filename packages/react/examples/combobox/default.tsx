import source from "./default.tsx?raw";
import { Combobox } from "@pisagor/react";

export function Default() {
  return (
    <Combobox
      items={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
        { label: "Date", value: "date" },
      ]}
    />
  );
}

export { source as DefaultSource };
