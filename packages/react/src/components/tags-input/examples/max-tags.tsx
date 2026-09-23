import { Field } from "@pisagor/react";
import { TagsInput } from "..";
export function MaxTags() {
  return (
    <Field>
      <Field.Label>Frameworks (max 3)</Field.Label>
      <TagsInput className="w-full" defaultValue={["React", "Solid"]} max={3}>
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
