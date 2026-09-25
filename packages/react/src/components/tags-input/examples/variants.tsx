import { TagsInput } from "..";

export function Variants() {
  const defaultValue = ["React", "Solid"];

  return (
    <div className="flex flex-col gap-2">
      <TagsInput
        className="w-full"
        defaultValue={defaultValue}
        variant="primary"
      >
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
      <TagsInput
        className="w-full"
        defaultValue={defaultValue}
        variant="secondary"
      >
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
    </div>
  );
}
