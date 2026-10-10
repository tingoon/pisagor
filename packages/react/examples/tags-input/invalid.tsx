import { TagsInput } from "@pisagor/react";

export function Invalid() {
  return (
    <TagsInput className="w-full" defaultValue={["React", "Solid"]} invalid>
      <TagsInput.Context>
        {({ value }) =>
          value.map((tag, index) => (
            <TagsInput.Item index={index} key={tag} value={tag}>
              {tag}
            </TagsInput.Item>
          ))
        }
      </TagsInput.Context>
    </TagsInput>
  );
}
