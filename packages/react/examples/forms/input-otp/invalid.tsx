import { InputOTP } from "@pisagor/react";
import { useState } from "react";

export function Invalid() {
  const [value, setValue] = useState([""]);

  const isCorrect = value.join("") === "1234";

  return (
    <InputOTP
      invalid={!isCorrect}
      onValueChange={setValue}
      value={value}
      length={4}
    />
  );
}
