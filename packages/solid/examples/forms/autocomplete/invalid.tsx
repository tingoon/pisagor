import { Autocomplete } from "@pisagor/solid";

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
