import { PhoneInput } from "..";

export function Invalid() {
  return {
    components: { PhoneInput },
    template: '<PhoneInput invalid placeholder="Enter phone number" />',
  };
}
