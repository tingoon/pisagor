import source from "./four-digits.tsx?raw";
import { InputOTP } from "@pisagor/react";

export function FourDigits() {
  return (
    <InputOTP>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  );
}

export { source as FourDigitsSource };
