import { Select } from "../../../../../src/components/select/index";

export function Default() {
  return (
    <Select
      items={["React", "Solid", "Vue", "Svelte"]}
      placeholder="Select a framework"
    />
  );
}
