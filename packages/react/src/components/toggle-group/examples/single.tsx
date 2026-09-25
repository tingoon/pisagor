import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react";
import { ToggleGroup } from "..";

export function Single() {
  return (
    <ToggleGroup.Root defaultValue={["bold"]} multiple={false}>
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
  );
}
