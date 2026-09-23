import { Surface } from "@pisagor/vue";
import { PhoneInput } from "..";
export function OnSurface() {
  return {
    components: { PhoneInput, Surface },
    template: `
        <Surface bordered padding="md" variant="default">
          <div class="flex flex-col gap-2">
            <PhoneInput placeholder="Primary" variant="primary" />
            <PhoneInput placeholder="Secondary" variant="secondary" />
          </div>
        </Surface>
      `,
  };
}
