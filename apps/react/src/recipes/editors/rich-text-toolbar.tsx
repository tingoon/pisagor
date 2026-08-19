import {
  TextBIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";
import { ButtonGroup } from "@pisagor/react/button-group";
import { Tooltip } from "@pisagor/react/tooltip";

export function RichTextToolbar() {
  return (
    <ButtonGroup>
      <Tooltip content="Bold">
        <Button size="icon-md" variant="outline">
          <TextBIcon />
        </Button>
      </Tooltip>
      <Tooltip content="Italic">
        <Button size="icon-md" variant="outline">
          <TextItalicIcon />
        </Button>
      </Tooltip>
      <Tooltip content="Underline">
        <Button size="icon-md" variant="outline">
          <TextUnderlineIcon />
        </Button>
      </Tooltip>
      <Tooltip content="Strikethrough">
        <Button size="icon-md" variant="outline">
          <TextStrikethroughIcon />
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
}
