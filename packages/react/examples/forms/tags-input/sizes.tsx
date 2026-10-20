import { Field, TagsInput } from "@pisagor/react";

export function Sizes() {
  const defaultValue = ["React", "Solid"];

  return (
    <div className="flex flex-col gap-2">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Field key={size}>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput
            className="w-full"
            defaultValue={defaultValue}
            size={size}
          />
        </Field>
      ))}
    </div>
  );
}
