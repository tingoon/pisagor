/** @jsxImportSource solid-js */
import { TagsInput } from "@pisagor/solid";

export function Variants() {
  const defaultValue = ["React", "Solid"];

  return (
    <div class="flex flex-col gap-2">
      <TagsInput class="w-full" defaultValue={defaultValue} variant="primary">
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
      <TagsInput class="w-full" defaultValue={defaultValue} variant="secondary">
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
    </div>
  );
}
