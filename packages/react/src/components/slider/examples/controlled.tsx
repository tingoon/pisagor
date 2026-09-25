import { Field } from "@pisagor/react";
import { useState } from "react";
import { Slider } from "..";
export function Controlled() {
  const [value, setValue] = useState<number[]>([40]);

  const isGreaterThan80 = (value[0] ?? 0) > 80;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-sm">Greater than 80</p>
      <Field>
        <Slider
          label="Temperature"
          onValueChange={setValue}
          showValue
          value={value}
        />
      </Field>
      <p className="text-center">{isGreaterThan80 ? "✅" : "❌"}</p>
    </div>
  );
}
