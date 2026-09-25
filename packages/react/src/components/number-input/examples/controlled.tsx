import { useState } from "react";
import { NumberInput } from "..";

export function Controlled() {
  const [value, setValue] = useState("1");

  const isNumberFive = value === "3";

  return (
    <div className="flex flex-col gap-2 text-center text-sm">
      <p>Select the number 3</p>
      <NumberInput
        onValueChange={(value) => setValue(String(value))}
        value={value}
      >
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
      <p className="text-center">{isNumberFive ? "✅" : "❌"}</p>
    </div>
  );
}
