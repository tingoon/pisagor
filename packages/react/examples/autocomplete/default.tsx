import { Autocomplete } from "@pisagor/react";

export function Default() {
  return (
    <Autocomplete
      items={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
        { label: "Date", value: "date" },
      ]}
    />
  );
}
