import source from "./sizes.tsx?raw";
import { InputOTP } from "@pisagor/solid";
import { For } from "solid-js";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <For each={sizes}>
        {(size) => (
          <InputOTP size={size}>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
            <InputOTP.Slot index={3} />
          </InputOTP>
        )}
      </For>
    </div>
  );
}

export { source as SizesSource };
