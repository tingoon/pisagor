import { Field } from "@pisagor/vue";
import { ref } from "vue";
import { PhoneInput } from "..";

export function Controlled() {
  return {
    components: { Field, PhoneInput },
    setup() {
      const phone = ref("+31612345678");
      const onChange = (next: string) => {
        phone.value = next;
      };

      return { onChange, phone };
    },
    template: `
        <Field>
          <Field.Label>Phone</Field.Label>
          <PhoneInput :onChange="onChange" placeholder="Enter phone number" :value="phone" />
          <Field.Description class="text-right">E.164 value: {{ phone || "—" }}</Field.Description>
        </Field>
      `,
  };
}
