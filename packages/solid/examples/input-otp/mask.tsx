/** @jsxImportSource solid-js */
import { InputOTP } from "@pisagor/solid/input-otp";

export function Mask() {
  return (
    <InputOTP>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  );
}
