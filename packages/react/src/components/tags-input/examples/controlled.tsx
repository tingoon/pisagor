import { Field } from "@pisagor/react";
import { useState } from "react";
import { TagsInput } from "..";
export function Controlled() {
  const initialValue = ["React", "Solid"];
  const [value, setValue] = useState(initialValue);

  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput className="w-full" onValueChange={setValue} value={value}>
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
    </Field>
  );
}
