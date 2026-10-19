import { Field, TagsInput } from "@pisagor/solid";

export function MaxTags() {
  return (
    <Field>
      <Field.Label>Frameworks (max 3)</Field.Label>
      <TagsInput class="w-full" defaultValue={["React", "Solid"]} max={3} />
    </Field>
  );
}
