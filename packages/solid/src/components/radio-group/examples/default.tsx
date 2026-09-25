import { RadioGroup } from "../index";

export function Default() {
  return (
    <RadioGroup
      defaultValue="1"
      items={[
        { label: "Default", value: "1" },
        { label: "Comfortable", value: "2" },
        { label: "Compact", value: "3" },
      ]}
    />
  );
}
