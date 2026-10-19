import { Field, TagsInput } from "@pisagor/react";
import { useState } from "react";

export function Controlled() {
  const initialValue = ["React", "Solid"];
  const [value, setValue] = useState(initialValue);

  return (
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput className="w-full" onValueChange={setValue} value={value} />
    </Field>
  );
}
