import { Field, TagsInput } from "@pisagor/solid";

export function DisableEditing() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        class="w-full"
        defaultValue={["React", "Solid"]}
        editable={false}
      />
    </Field>
  );
}
