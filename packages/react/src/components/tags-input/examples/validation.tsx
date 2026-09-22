import { Field } from "@pisagor/react";
import { TagsInput } from "..";
export function Validation() {
  const validTagPattern = /^[a-zA-Z0-9-]+$/;
  return (
    <Field>
      <Field.Label>Min 3 chars, alphanumeric + hyphen</Field.Label>
      <TagsInput
        className="w-full"
        validate={({ value, inputValue }) => {
          const next = inputValue.trim();
          return (
            Boolean(next) && !value.includes(next) && next.length >= 3 && validTagPattern.test(next)
          );
        }}
      >
        <TagsInput.Context>
          {({ value }) =>
            value.map((tag, index) => (
              <TagsInput.Item index={index} key={tag} value={tag}>
                {tag}
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
      </TagsInput>
    </Field>
  );
}
