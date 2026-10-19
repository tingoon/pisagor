import { TagsInput } from "@pisagor/react";

export function Variants() {
  const defaultValue = ["React", "Solid"];

  return (
    <div className="flex flex-col gap-2">
      <TagsInput
        className="w-full"
        defaultValue={defaultValue}
        variant="primary"
      />
      <TagsInput
        className="w-full"
        defaultValue={defaultValue}
        variant="secondary"
      />
    </div>
  );
}
