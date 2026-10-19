import { Autocomplete } from "@pisagor/solid";

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
