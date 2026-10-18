import { Field, TagsInput } from "@pisagor/solid";
import { For } from "solid-js";

export function MaxTags() {
  return (
    <Field>
      <Field.Label>Frameworks (max 3)</Field.Label>
      <TagsInput class="w-full" defaultValue={["React", "Solid"]} max={3}>
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
