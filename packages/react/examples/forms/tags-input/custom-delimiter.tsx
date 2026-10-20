import { Field, TagsInput } from "@pisagor/react";

export function CustomDelimiter() {
  const tagDelimiter = /[,\s]+/;

  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        className="w-full"
        defaultValue={["React"]}
        delimiter={tagDelimiter}
      />
    </Field>
  );
}
