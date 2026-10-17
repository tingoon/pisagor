import source from "./disabled.tsx?raw";
import { PhoneInput } from "@pisagor/react/phone-input";

export function Disabled() {
  return <PhoneInput disabled />;
}

export { source as DisabledSource };
