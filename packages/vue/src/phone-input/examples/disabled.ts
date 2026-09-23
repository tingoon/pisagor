import { PhoneInput } from "..";

export function Disabled() {
  return {
    components: { PhoneInput },
    template:
      '<PhoneInput default-value="+14155552671" disabled placeholder="Enter phone number" />',
  };
}
