import { Combobox } from "..";

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
