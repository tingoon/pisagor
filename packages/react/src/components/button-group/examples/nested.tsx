import {
  BracketsCurlyIcon,
  ImageSquareIcon,
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { ButtonGroup } from "..";
export function Nested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Italic" size="icon-md" variant="outline">
          <TextItalicIcon />
        </Button>
        <Button aria-label="Bold" size="icon-md" variant="outline">
          <TextBIcon />
        </Button>
        <Button aria-label="Underline" size="icon-md" variant="outline">
          <TextUnderlineIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Image" size="icon-md" variant="outline">
          <ImageSquareIcon />
        </Button>
        <Button aria-label="Code" size="icon-md" variant="outline">
          <BracketsCurlyIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
