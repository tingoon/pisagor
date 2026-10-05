import { Field } from "@pisagor/solid";
import { PhoneInput } from "@pisagor/solid/phone-input";
import { createSignal } from "solid-js";
export function Controlled() {
  const [phone, setPhone] = createSignal("+31612345678");

  return (
    <Field>
      <Field.Label>Phone</Field.Label>
      <PhoneInput
        defaultCountry="NL"
        onChange={setPhone}
        placeholder="Enter phone number"
        value={phone()}
      />
      <Field.Description class="text-right">
        E.164 value: {phone() || "—"}
      </Field.Description>
    </Field>
  );
}
