import { Field, TagsInput } from "@pisagor/react";

export function MaxTags() {
  return (
    <Field>
      <Field.Label>Frameworks (max 3)</Field.Label>
      <TagsInput className="w-full" defaultValue={["React", "Solid"]} max={3} />
    </Field>
  );
}
