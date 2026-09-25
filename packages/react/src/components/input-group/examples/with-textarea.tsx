import { ArrowUpIcon, PlusIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { InputGroup } from "..";
export function WithTextarea() {
  return (
    <InputGroup>
      <InputGroup.Textarea placeholder="Ask, Search or Chat…" />
      <InputGroup.Addon align="block-end">
        <Button
          aria-label="Add files"
          className="rounded-full"
          size="icon-sm"
          variant="ghost"
        >
          <PlusIcon />
        </Button>
        <InputGroup.Text className="ml-auto">33% used</InputGroup.Text>
        <Button aria-label="Send" className="rounded-full" size="icon-sm">
          <ArrowUpIcon />
        </Button>
      </InputGroup.Addon>
    </InputGroup>
  );
}
