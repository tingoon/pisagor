import source from "./disabled.tsx?raw";
import { OtpField } from "@pisagor/solid-form";

export function Disabled() {
  return <OtpField class="items-center" disabled label="Verification code" />;
}

export { source as DisabledSource };
