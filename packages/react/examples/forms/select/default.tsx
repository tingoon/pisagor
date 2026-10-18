import { Select } from "@pisagor/react";

export function Default() {
  return (
    <Select
      items={["Banana", "Apple", "Orange", "Pineapple"]}
      placeholder="Select a fruit"
    />
  );
}
