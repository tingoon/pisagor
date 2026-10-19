import { Field, TagsInput } from "@pisagor/solid";

export function BlurBehavior() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput blurBehavior="add" class="w-full" defaultValue={["React"]} />
    </Field>
  );
}
