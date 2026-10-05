import { Field, TagsInput } from "@pisagor/solid";
import { For } from "solid-js";

export function Sizes() {
  const defaultValue = ["React", "Solid"];

  return (
    <div class="flex flex-col gap-2">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Field>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput class="w-full" defaultValue={defaultValue} size={size}>
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
      ))}
    </div>
  );
}
