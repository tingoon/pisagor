import { InputOTP } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Invalid() {
  const [value, setValue] = createSignal([""]);

  const isCorrect = value().join("") === "1234";

  return (
    <InputOTP
      invalid={!isCorrect}
      onValueChange={setValue}
      value={value()}
      length={4}
    />
  );
}
