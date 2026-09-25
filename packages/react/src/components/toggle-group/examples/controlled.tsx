import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { ToggleGroup } from "..";

export function Controlled() {
  const [value, setValue] = useState(["bold"]);

  return (
    <div className="flex flex-col items-center gap-2">
      <ToggleGroup.Root
        onValueChange={(value) =>
          setValue(Array.isArray(value) ? value : [value])
        }
        value={value}
      >
        <ToggleGroup.Item aria-label="Toggle bold" value="bold">
          <TextBIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle italic" value="italic">
          <TextItalicIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle underline" value="underline">
          <TextUnderlineIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <p className="text-center text-muted-foreground text-sm">
        {value.length > 0 ? value.join(", ") : "None"}
      </p>
    </div>
  );
}
