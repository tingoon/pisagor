import { Field, TagsInput } from "@pisagor/react";

export function DisableEditing() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        className="w-full"
        defaultValue={["React", "Solid"]}
        editable={false}
      />
    </Field>
  );
}
