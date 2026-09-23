import { InputOTP } from "..";

export function Separator() {
  return (
    <InputOTP>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Separator />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
      <InputOTP.Separator />
      <InputOTP.Slot index={4} />
      <InputOTP.Slot index={5} />
    </InputOTP>
  );
}
