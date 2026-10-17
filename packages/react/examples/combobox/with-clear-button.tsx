import { Combobox } from "@pisagor/react";

export function WithClearButton() {
  return (
    <Combobox
      clearable
      defaultValue={["apple"]}
      items={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
      ]}
    />
  );
}
