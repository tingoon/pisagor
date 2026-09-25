import { Field } from "@pisagor/react";
import { useState } from "react";
import { PhoneInput } from "..";

export function Controlled() {
  const [phone, setPhone] = useState("+31612345678");

  return (
    <Field>
      <Field.Label>Phone</Field.Label>
      <PhoneInput
        defaultCountry="NL"
        onChange={setPhone}
        placeholder="Enter phone number"
        value={phone}
      />
      <Field.Description className="text-right">
        E.164 value: {phone || "—"}
      </Field.Description>
    </Field>
  );
}
