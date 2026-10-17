import source from "./disabled.tsx?raw";
import { OtpField } from "@pisagor/react-form";

export function Disabled() {
  return (
    <OtpField className="items-center" disabled label="Verification code" />
  );
}

export { source as DisabledSource };
