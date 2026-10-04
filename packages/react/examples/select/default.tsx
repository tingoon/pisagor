import { Select } from "@pisagor/react/select";

export function Default() {
  return (
    <Select
      items={["Banana", "Apple", "Orange", "Pineapple"]}
      placeholder="Select a fruit"
    />
  );
}
