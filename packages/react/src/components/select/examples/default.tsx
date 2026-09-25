import { Select } from "..";

export function Default() {
  return (
    <Select
      items={["Banana", "Apple", "Orange", "Pineapple"]}
      placeholder="Select a fruit"
    />
  );
}
