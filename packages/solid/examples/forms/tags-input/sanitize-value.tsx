import { Field, TagsInput } from "@pisagor/solid";

export function SanitizeValue() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        class="w-full"
        defaultValue={["react"]}
        sanitizeValue={(value) => value.trim().toLowerCase()}
      />
    </Field>
  );
}
