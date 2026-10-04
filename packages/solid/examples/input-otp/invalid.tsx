/** @jsxImportSource solid-js */

import { InputOTP } from "@pisagor/solid/input-otp";
import { createSignal } from "solid-js";
export function Invalid() {
  const [value, setValue] = createSignal([""]);

  const isCorrect = value().join("") === "1234";

  return (
    <InputOTP invalid={!isCorrect} onValueChange={setValue} value={value()}>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  );
}
