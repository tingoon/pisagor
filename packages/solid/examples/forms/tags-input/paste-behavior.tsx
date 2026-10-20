import { Field, TagsInput } from "@pisagor/solid";

export function PasteBehavior() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput addOnPaste class="w-full" defaultValue={[]} delimiter="," />
    </Field>
  );
}
