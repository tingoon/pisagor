import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";
import { Field } from "@pisagor/react/field";
import { Input } from "@pisagor/react/input";

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
