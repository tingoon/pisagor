import { Field, TagsInput } from "@pisagor/solid";
import { createSignal, For } from "solid-js";

export function Controlled() {
  const initialValue = ["React", "Solid"];
  const [value, setValue] = createSignal(initialValue);

  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput class="w-full" onValueChange={setValue} value={value()}>
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
