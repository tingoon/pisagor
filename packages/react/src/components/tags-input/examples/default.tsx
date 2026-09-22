import { TagsInput } from "..";

export function Default() {
  const defaultValue = ["React", "Solid", "Vue", "Svelte"];
  return (
    <TagsInput className="w-full" defaultValue={defaultValue}>
      <TagsInput.Context>
        {({ value }) =>
          value.map((value, index) => (
            <TagsInput.Item index={index} key={value} value={value}>
              {value}
            </TagsInput.Item>
          ))
        }
      </TagsInput.Context>
    </TagsInput>
  );
}
