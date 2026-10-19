import { ToggleGroup } from "@pisagor/react";
import { useState } from "react";

const items = [
  { content: "Bold", value: "bold" },
  { content: "Italic", value: "italic" },
  { content: "Underline", value: "underline" },
];

export function Controlled() {
  const [value, setValue] = useState(["bold"]);

  return (
    <div className="flex flex-col items-center gap-2">
      <ToggleGroup
        items={items}
        onValueChange={(value) =>
          setValue(Array.isArray(value) ? value : [value])
        }
        value={value}
      />
      <p className="text-muted-foreground text-center text-sm">
        {value.length > 0 ? value.join(", ") : "None"}
      </p>
    </div>
  );
}
