import { TextBIcon, TextItalicIcon, TextUnderlineIcon } from "@phosphor-icons/react";
import { Toggle } from "..";

export function IconGroup() {
  return (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Toggle bold" variant="outline">
        <TextBIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="outline">
        <TextItalicIcon />
      </Toggle>
      <Toggle aria-label="Toggle underline" variant="outline">
        <TextUnderlineIcon />
      </Toggle>
    </div>
  );
}
