import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button, Field, Input } from "@pisagor/react";

export function SearchFieldInline() {
  return (
    <Field orientation="horizontal">
      <Input placeholder="Search..." />
      <Button aria-label="Search" size="icon-md">
        <MagnifyingGlassIcon />
      </Button>
    </Field>
  );
}
