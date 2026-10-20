import { Command } from "@pisagor/solid";

export function Groups() {
  const initialItems = [
    { group: "Fruit", label: "Apple", value: "apple" },
    { group: "Fruit", label: "Banana", value: "banana" },
    { group: "Fruit", label: "Cherry", value: "cherry" },
    { group: "Countries", label: "United States", value: "us" },
    { group: "Countries", label: "United Kingdom", value: "uk" },
    { group: "Countries", label: "Germany", value: "de" },
  ];

  return <Command items={initialItems} placeholder="Search..." />;
}
