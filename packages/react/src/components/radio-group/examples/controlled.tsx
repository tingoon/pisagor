import { useState } from "react";
import { RadioGroup } from "..";

export function Controlled() {
  const [value, setValue] = useState<string | null>(null);

  const isCorrectOption = value === "comfortable";

  return (
    <div className="flex flex-col items-center gap-2 text-center text-sm">
      <p>Select the option comfortable</p>
      <RadioGroup
        items={[
          { label: "Default", value: "default" },
          { label: "Comfortable", value: "comfortable" },
          { label: "Compact", value: "compact" },
        ]}
        onValueChange={setValue}
        value={value}
      />
      <p className="text-center">{isCorrectOption ? "✅" : "❌"}</p>
    </div>
  );
}
