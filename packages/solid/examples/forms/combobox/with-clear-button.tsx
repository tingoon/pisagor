import { Combobox } from "@pisagor/solid";

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
