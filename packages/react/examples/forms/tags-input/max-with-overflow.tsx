import { Field, TagsInput } from "@pisagor/react";

export function MaxWithOverflow() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        allowOverflow
        className="w-full"
        defaultValue={["React", "Solid", "Vue"]}
        max={3}
      />
    </Field>
  );
}
