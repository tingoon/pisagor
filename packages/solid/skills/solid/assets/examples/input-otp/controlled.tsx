/** @jsxImportSource solid-js */

import { InputOTP } from "@pisagor/solid/input-otp";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal([""]);

  const isCorrect = value().join("") === "1234";

  return (
    <div class="flex flex-col gap-2">
      <p class="text-center text-muted-foreground text-sm">
        Enter the code 1234
      </p>
      <InputOTP onValueChange={setValue} value={value()}>
        <InputOTP.Slot index={0} />
        <InputOTP.Slot index={1} />
        <InputOTP.Slot index={2} />
        <InputOTP.Slot index={3} />
      </InputOTP>
      <p class="text-center text-muted-foreground text-sm">
        {isCorrect ? "✅" : "❌"}
      </p>
    </div>
  );
}
