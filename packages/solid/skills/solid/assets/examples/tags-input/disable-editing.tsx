/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid";
import { TagsInput } from "@pisagor/solid/tags-input";
export function DisableEditing() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        class="w-full"
        defaultValue={["React", "Solid"]}
        editable={false}
      >
        <TagsInput.Context>
          {({ value }) =>
            value.map((tag, index) => (
              <TagsInput.Item index={index} value={tag}>
                {tag}
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
      </TagsInput>
    </Field>
  );
}
