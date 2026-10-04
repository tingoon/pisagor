/** @jsxImportSource solid-js */
import { TagsInput } from "@pisagor/solid/tags-input";

export function Disabled() {
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
