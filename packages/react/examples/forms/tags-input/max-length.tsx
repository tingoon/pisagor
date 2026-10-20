import { Field, TagsInput } from "@pisagor/react";

export function MaxLength() {
  return (
    <Field>
      <Field.Label>Frameworks (max 10 chars)</Field.Label>
      <TagsInput className="w-full" defaultValue={["React"]} maxLength={10} />
    </Field>
  );
}
