import source from "./invalid.tsx?raw";
import { PhoneInput } from "@pisagor/react/phone-input";

export function Invalid() {
  return <PhoneInput invalid />;
}

export { source as InvalidSource };
