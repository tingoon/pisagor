import { Field, TagsInput } from "@pisagor/solid";
import { For } from "solid-js";

export function SanitizeValue() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        class="w-full"
        defaultValue={["react"]}
        sanitizeValue={(value) => value.trim().toLowerCase()}
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
