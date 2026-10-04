import { PhoneInput } from "../../src/phone-input";

export function Disabled() {
  return {
    components: { PhoneInput },
    template:
      '<PhoneInput disabled placeholder="Enter phone number" value="+14155552671" />',
  };
}
