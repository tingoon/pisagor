import { Field } from "@pisagor/react";
import { TagsInput } from "..";
export function Sizes() {
  const defaultValue = ["React", "Solid"];

  return (
    <div className="flex flex-col gap-2">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Field key={size}>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput className="w-full" defaultValue={defaultValue} size={size}>
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
      ))}
    </div>
  );
}
