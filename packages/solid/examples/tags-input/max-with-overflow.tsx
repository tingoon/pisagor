import { Field, TagsInput } from "@pisagor/solid";
import { For } from "solid-js";

export function MaxWithOverflow() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        allowOverflow
        class="w-full"
        defaultValue={["React", "Solid", "Vue"]}
        max={3}
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
