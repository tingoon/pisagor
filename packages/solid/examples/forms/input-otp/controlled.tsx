import { InputOTP } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Controlled() {
  const [value, setValue] = createSignal([""]);

  const isCorrect = value().join("") === "1234";

  return (
    <div class="flex flex-col gap-2">
      <p class="text-muted-foreground text-center text-sm">
        Enter the code 1234
      </p>
      <InputOTP onValueChange={setValue} value={value()} length={4} />
      <p class="text-muted-foreground text-center text-sm">
        {isCorrect ? "✅" : "❌"}
      </p>
    </div>
  );
}
