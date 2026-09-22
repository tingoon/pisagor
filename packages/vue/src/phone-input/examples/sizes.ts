import { PhoneInput } from "..";

export function Sizes() {
  return {
    components: { PhoneInput },
    template: `
        <div class="flex flex-col gap-2">
          <PhoneInput placeholder="Small" size="sm" />
          <PhoneInput placeholder="Medium" size="md" />
          <PhoneInput placeholder="Large" size="lg" />
        </div>
      `,
  };
}
