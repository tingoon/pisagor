/** @jsxImportSource solid-js */

import { Field, TagsInput } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const initialValue = ["React", "Solid"];
  const [value, setValue] = createSignal(initialValue);

  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput class="w-full" onValueChange={setValue} value={value()}>
        <TagsInput.Context>
          {({ value }) =>
            value().map((tag, index) => (
              <TagsInput.Item index={index} value={tag}>
                {tag}
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
      </TagsInput>
    </Field>
  );
}
