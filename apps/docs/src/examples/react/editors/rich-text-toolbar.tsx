import {
  TextBIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react";
import { Button, ButtonGroup, Tooltip } from "@pisagor/react";

export function RichTextToolbar() {
  return (
    <ButtonGroup>
      <Tooltip content="Bold">
        <Button aria-label="Bold" size="icon-md" variant="outline">
          <TextBIcon />
        </Button>
      </Tooltip>
      <Tooltip content="Italic">
        <Button aria-label="Italic" size="icon-md" variant="outline">
          <TextItalicIcon />
        </Button>
      </Tooltip>
      <Tooltip content="Underline">
        <Button aria-label="Underline" size="icon-md" variant="outline">
          <TextUnderlineIcon />
        </Button>
      </Tooltip>
      <Tooltip content="Strikethrough">
        <Button aria-label="Strikethrough" size="icon-md" variant="outline">
          <TextStrikethroughIcon />
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
}
