import { Field, TagsInput } from "@pisagor/solid";

export function CustomDelimiter() {
  const tagDelimiter = /[,\s]+/;

  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        class="w-full"
        defaultValue={["React"]}
        delimiter={tagDelimiter}
      />
    </Field>
  );
}
