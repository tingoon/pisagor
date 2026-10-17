import { TagsInput } from "@pisagor/solid";
import { For } from "solid-js";

export function Disabled() {
  return (
    <TagsInput class="w-full">
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
  );
}
