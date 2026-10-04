/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid";
import { TagsInput } from "@pisagor/solid/tags-input";
export function MaxTags() {
  return (
    <Field>
      <Field.Label>Frameworks (max 3)</Field.Label>
      <TagsInput class="w-full" defaultValue={["React", "Solid"]} max={3}>
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
