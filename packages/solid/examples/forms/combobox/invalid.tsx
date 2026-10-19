import { Combobox } from "@pisagor/solid";

export function Invalid() {
  return (
    <Combobox
      invalid
      items={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
      ]}
    />
  );
}
