/** @jsxImportSource solid-js */
import { Field, TagsInput } from "@pisagor/solid";
export function CustomDelimiter() {
  const tagDelimiter = /[,\s]+/;
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        class="w-full"
        defaultValue={["React"]}
        delimiter={tagDelimiter}
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
