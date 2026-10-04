import { PhoneInput } from "@pisagor/vue/phone-input";

export function Default() {
  return {
    components: { PhoneInput },
    template: '<PhoneInput default-country="US" placeholder="Phone number" />',
  };
}
