import { Field } from "@pisagor/react";
import { TagsInput } from "..";
export function MaxLength() {
  return (
    <Field>
      <Field.Label>Frameworks (max 10 chars)</Field.Label>
      <TagsInput className="w-full" defaultValue={["React"]} maxLength={10}>
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
