/** @jsxImportSource solid-js */
import { RadioGroup } from "@pisagor/solid/radio-group";

export function Disabled() {
  return (
    <div class="flex flex-wrap gap-2">
      <RadioGroup
        defaultValue="1"
        items={[
          { label: "Default", value: "1" },
          { disabled: true, label: "Comfortable", value: "2" },
          { label: "Compact", value: "3" },
        ]}
      />
      <RadioGroup
        disabled
        items={[
          { label: "Default", value: "1" },
          { label: "Comfortable", value: "2" },
          { label: "Compact", value: "3" },
        ]}
      />
    </div>
  );
}
