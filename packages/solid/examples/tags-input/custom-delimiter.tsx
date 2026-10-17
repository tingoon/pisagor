import { Field, TagsInput } from "@pisagor/solid";
import { For } from "solid-js";

export function CustomDelimiter() {
  const tagDelimiter = /[,\s]+/;
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        class="w-full"
        defaultValue={["React"]}
        delimiter={tagDelimiter}
      >
        <TagsInput.Context>
          {(api) => (
            <For each={api().value}>
              {(tag, index) => (
                <TagsInput.Item index={index()} value={tag}>
                  {tag}
                </TagsInput.Item>
              )}
            </For>
          )}
        </TagsInput.Context>
      </TagsInput>
    </Field>
  );
}
