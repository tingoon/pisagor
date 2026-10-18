import { Field, TagsInput } from "@pisagor/solid";
import { For } from "solid-js";

export function PasteBehavior() {
  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput addOnPaste class="w-full" defaultValue={[]} delimiter=",">
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
