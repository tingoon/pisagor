import { Field, TagsInput } from "@pisagor/react";

export function PasteBehavior() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        addOnPaste
        className="w-full"
        defaultValue={[]}
        delimiter=","
      />
    </Field>
  );
}
