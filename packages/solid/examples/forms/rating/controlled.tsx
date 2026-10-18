import { Rating } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal(0);

  const isCorrectRating = value() === 5;

  return (
    <div class="flex flex-col gap-2 text-center text-sm">
      <p>Select the rating 5</p>
      <Rating onValueChange={(value) => setValue(value ?? 0)} value={value()} />
      <p class="text-center">{isCorrectRating ? "✅" : "❌"}</p>
    </div>
  );
}
