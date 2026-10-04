import { PhoneInput } from "../../src/phone-input";

export function Invalid() {
  return {
    components: { PhoneInput },
    template: '<PhoneInput invalid placeholder="Enter phone number" />',
  };
}
