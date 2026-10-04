/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid";
import { TagsInput } from "@pisagor/solid/tags-input";
export function MaxWithOverflow() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        allowOverflow
        class="w-full"
        defaultValue={["React", "Solid", "Vue"]}
        max={3}
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
