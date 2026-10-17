import source from "./sizes.tsx?raw";
import { Checkbox, Field } from "@pisagor/solid";
import { For } from "solid-js";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <For each={sizes}>
        {(size) => (
          <Field orientation="horizontal">
            <Checkbox defaultChecked size={size} />
            <Field.Label>Size {size}</Field.Label>
          </Field>
        )}
      </For>
    </div>
  );
}

export { source as SizesSource };
