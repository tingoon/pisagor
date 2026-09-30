import { PhoneInput } from "../../../../../src/phone-input";

export function Disabled() {
  return {
    components: { PhoneInput },
    template:
      '<PhoneInput default-value="+14155552671" disabled placeholder="Enter phone number" />',
  };
}
