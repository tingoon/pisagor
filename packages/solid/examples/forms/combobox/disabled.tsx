import { Combobox } from "@pisagor/solid";

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
