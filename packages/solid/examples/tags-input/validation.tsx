/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid";
import { TagsInput } from "@pisagor/solid/tags-input";
export function Validation() {
  const validTagPattern = /^[a-zA-Z0-9-]+$/;
  return (
    <Field>
      <Field.Label>Min 3 chars, alphanumeric + hyphen</Field.Label>
      <TagsInput
        class="w-full"
        validate={({ value, inputValue }) => {
          const next = inputValue.trim();
          return (
            Boolean(next) &&
            !value.includes(next) &&
            next.length >= 3 &&
            validTagPattern.test(next)
          );
        }}
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
