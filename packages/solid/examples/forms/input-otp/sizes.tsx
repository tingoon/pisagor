import { InputOTP } from "@pisagor/solid";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      {sizes.map((size) => (
        <InputOTP size={size} length={4} />
      ))}
    </div>
  );
}
