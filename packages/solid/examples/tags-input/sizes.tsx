/** @jsxImportSource solid-js */
import { Field, TagsInput } from "@pisagor/solid";
export function Sizes() {
  const defaultValue = ["React", "Solid"];

  return (
    <div class="flex flex-col gap-2">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Field>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput class="w-full" defaultValue={defaultValue} size={size}>
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
      ))}
    </div>
  );
}
