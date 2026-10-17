import source from "./sizes.tsx?raw";
import { Checkbox, Field } from "@pisagor/react";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      {sizes.map((size) => (
        <Field key={size} orientation="horizontal">
          <Checkbox defaultChecked size={size} />
          <Field.Label>Size {size}</Field.Label>
        </Field>
      ))}
    </div>
  );
}

export { source as SizesSource };
