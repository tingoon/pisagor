import { Field } from "@pisagor/react";
import { TagsInput } from "..";
export function MaxWithOverflow() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput allowOverflow className="w-full" defaultValue={["React", "Solid", "Vue"]} max={3}>
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
