/** @jsxImportSource solid-js */
import { Field, TagsInput } from "@pisagor/solid";
export function BlurBehavior() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput blurBehavior="add" class="w-full" defaultValue={["React"]}>
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
