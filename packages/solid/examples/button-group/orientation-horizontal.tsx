/** @jsxImportSource solid-js */

import { Button, ButtonGroup } from "@pisagor/solid";
import { PlayIcon, SkipBackIcon, SkipForwardIcon } from "@pisagor/solid/icons";
export function OrientationHorizontal() {
  return (
    <ButtonGroup>
      <Button aria-label="Skip back" size="icon-md" variant="outline">
        <SkipBackIcon />
      </Button>
      <Button aria-label="Play" size="icon-md" variant="outline">
        <PlayIcon />
      </Button>
      <Button aria-label="Skip forward" size="icon-md" variant="outline">
        <SkipForwardIcon />
      </Button>
    </ButtonGroup>
  );
}
