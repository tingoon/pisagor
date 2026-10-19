import { Autocomplete } from "@pisagor/solid";

export function WithClearButton() {
  return (
    <Autocomplete
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
