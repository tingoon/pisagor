import { Field } from "@pisagor/react";
import { TagsInput } from "..";
export function SanitizeValue() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        className="w-full"
        defaultValue={["react"]}
        sanitizeValue={(value) => value.trim().toLowerCase()}
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
