import { useState } from "react";
import { InputOTP } from "..";

export function Invalid() {
  const [value, setValue] = useState([""]);

  const isCorrect = value.join("") === "1234";

  return (
    <InputOTP invalid={!isCorrect} onValueChange={setValue} value={value}>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  );
}
