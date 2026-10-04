/** @jsxImportSource solid-js */
import { Field, TagsInput } from "@pisagor/solid";
export function MaxLength() {
  return (
    <Field>
      <Field.Label>Frameworks (max 10 chars)</Field.Label>
      <TagsInput class="w-full" defaultValue={["React"]} maxLength={10}>
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
