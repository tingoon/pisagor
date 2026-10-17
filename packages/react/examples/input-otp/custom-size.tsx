import { InputOTP } from "@pisagor/react";

export function CustomSize() {
  return (
    <InputOTP>
      <InputOTP.Slot className="size-12 text-lg" index={0} />
      <InputOTP.Slot className="size-12 text-lg" index={1} />
      <InputOTP.Slot className="size-12 text-lg" index={2} />
      <InputOTP.Slot className="size-12 text-lg" index={3} />
    </InputOTP>
  );
}
