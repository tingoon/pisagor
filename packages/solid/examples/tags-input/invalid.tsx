/** @jsxImportSource solid-js */
import { TagsInput } from "@pisagor/solid";

export function Invalid() {
  return (
    <TagsInput class="w-full">
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
  );
}
