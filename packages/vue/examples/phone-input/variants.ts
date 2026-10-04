import { PhoneInput } from "@pisagor/vue/phone-input";

export function Variants() {
  return {
    components: { PhoneInput },
    template: `
        <div class="flex flex-col gap-2">
          <PhoneInput placeholder="Primary" variant="primary" />
          <PhoneInput placeholder="Secondary" variant="secondary" />
        </div>
      `,
  };
}
