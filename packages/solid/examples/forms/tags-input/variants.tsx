import { TagsInput } from "@pisagor/solid";

export function Variants() {
  const defaultValue = ["React", "Solid"];

  return (
    <div class="flex flex-col gap-2">
      <TagsInput class="w-full" defaultValue={defaultValue} variant="primary" />
      <TagsInput
        class="w-full"
        defaultValue={defaultValue}
        variant="secondary"
      />
    </div>
  );
}
