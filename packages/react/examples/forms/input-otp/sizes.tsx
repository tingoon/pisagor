import { InputOTP } from "@pisagor/react";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      {sizes.map((size) => (
        <InputOTP key={size} size={size} length={4} />
      ))}
    </div>
  );
}
