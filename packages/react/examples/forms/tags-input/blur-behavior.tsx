import { Field, TagsInput } from "@pisagor/react";

export function BlurBehavior() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        blurBehavior="add"
        className="w-full"
        defaultValue={["React"]}
      />
    </Field>
  );
}
