/** @jsxImportSource solid-js */
import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@pisagor/solid/icons";
import { ToggleGroup } from "@pisagor/solid/toggle-group";

export function DisabledItem() {
  return (
    <ToggleGroup.Root defaultValue={["bold"]} multiple>
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <TextBIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" disabled value="italic">
        <TextItalicIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" value="underline">
        <TextUnderlineIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
