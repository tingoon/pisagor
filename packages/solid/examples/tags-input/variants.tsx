import { TagsInput } from "@pisagor/solid";
import { For } from "solid-js";

export function Variants() {
  const defaultValue = ["React", "Solid"];

  return (
    <div class="flex flex-col gap-2">
      <TagsInput class="w-full" defaultValue={defaultValue} variant="primary">
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
      <TagsInput class="w-full" defaultValue={defaultValue} variant="secondary">
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
    </div>
  );
}
