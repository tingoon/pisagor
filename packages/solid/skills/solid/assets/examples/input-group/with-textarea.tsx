/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { ArrowUpIcon, PlusIcon } from "@pisagor/solid/icons";
import { InputGroup } from "@pisagor/solid/input-group";
export function WithTextarea() {
  return (
    <InputGroup>
      <InputGroup.Textarea placeholder="Ask, Search or Chat…" />
      <InputGroup.Addon align="block-end">
        <Button
          aria-label="Add files"
          class="rounded-full"
          size="icon-sm"
          variant="ghost"
        >
          <PlusIcon />
        </Button>
        <InputGroup.Text class="ml-auto">33% used</InputGroup.Text>
        <Button aria-label="Send" class="rounded-full" size="icon-sm">
          <ArrowUpIcon />
        </Button>
      </InputGroup.Addon>
    </InputGroup>
  );
}
