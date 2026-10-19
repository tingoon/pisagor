import { Field, TagsInput } from "@pisagor/solid";

export function MaxWithOverflow() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        allowOverflow
        class="w-full"
        defaultValue={["React", "Solid", "Vue"]}
        max={3}
      />
    </Field>
  );
}
