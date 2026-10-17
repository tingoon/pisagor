import { TagsInput } from "@pisagor/react";

export function Disabled() {
  return (
    <TagsInput className="w-full" defaultValue={["React", "Solid"]} disabled>
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
