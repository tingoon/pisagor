import { Autocomplete } from "@pisagor/react/autocomplete";

export function Default() {
  return (
    <Autocomplete
      clearable
      items={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
        { label: "Date", value: "date" },
      ]}
    />
  );
}
