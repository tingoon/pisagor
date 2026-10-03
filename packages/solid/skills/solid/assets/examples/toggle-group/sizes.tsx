/** @jsxImportSource solid-js */
import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@pisagor/solid/icons";
import { ToggleGroup } from "@pisagor/solid/toggle-group";

export function Sizes() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <ToggleGroup.Root defaultValue={["bold"]} multiple size="sm">
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
      <ToggleGroup.Root defaultValue={["bold"]} multiple size="lg">
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
    </div>
  );
}
