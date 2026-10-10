/** @jsxImportSource solid-js */
import { Button, Field, Input } from "@pisagor/solid";
import { MagnifyingGlassIcon } from "@pisagor/solid/icons";

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
