import { ToggleGroup } from "@pisagor/solid";
import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@squidlab/phosphor-solid/icons";
import { createSignal } from "solid-js";

export function Controlled() {
  const [value, setValue] = createSignal(["bold"]);

  return (
    <div class="flex flex-col items-center gap-2">
      <ToggleGroup.Root
        onValueChange={(value) =>
          setValue(Array.isArray(value) ? value : [value])
        }
        value={value()}
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
      <p class="text-muted-foreground text-center text-sm">
        {value().length > 0 ? value().join(", ") : "None"}
      </p>
    </div>
  );
}
