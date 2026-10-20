import { Field, TagsInput } from "@pisagor/solid";

export function MaxLength() {
  return (
    <Field>
      <Field.Label>Frameworks (max 10 chars)</Field.Label>
      <TagsInput class="w-full" defaultValue={["React"]} maxLength={10} />
    </Field>
  );
}
