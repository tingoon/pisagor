import source from "./disabled.tsx?raw";
import { InputOTP } from "@pisagor/react";

export function Disabled() {
  return (
    <InputOTP disabled>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  );
}

export { source as DisabledSource };
