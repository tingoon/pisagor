import { InputOTP } from "@pisagor/react";

export function CustomSize() {
  return (
    <InputOTP.Root>
      <InputOTP.Control>
        <InputOTP.Input className="size-12 text-lg" index={0} />
        <InputOTP.Input className="size-12 text-lg" index={1} />
        <InputOTP.Input className="size-12 text-lg" index={2} />
        <InputOTP.Input className="size-12 text-lg" index={3} />
      </InputOTP.Control>
    </InputOTP.Root>
  );
}
