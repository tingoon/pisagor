import source from "./sizes.tsx?raw";
import { InputOTP } from "@pisagor/react";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      {sizes.map((size) => (
        <InputOTP key={size} size={size}>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP>
      ))}
    </div>
  );
}

export { source as SizesSource };
