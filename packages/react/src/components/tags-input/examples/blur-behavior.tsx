import { Field } from "@pisagor/react";
import { TagsInput } from "..";
export function BlurBehavior() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput blurBehavior="add" className="w-full" defaultValue={["React"]}>
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
