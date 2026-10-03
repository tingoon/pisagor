<script lang="ts">
import { Field } from "@pisagor/svelte";
import { PhoneInput } from "@pisagor/svelte/phone-input";

let phone = $state("+31612345678");

</script>

<Field>
      <Field.Label>Phone</Field.Label>
      <PhoneInput
        defaultCountry="NL"
        onChange={(v) => { phone = v; }}
        placeholder="Enter phone number"
        value={phone}
      />
      <Field.Description class="text-right">
        E.164 value: {phone || "—"}
      </Field.Description>
    </Field>
