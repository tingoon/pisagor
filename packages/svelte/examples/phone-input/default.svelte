<script lang="ts">
import { PhoneInput } from "@pisagor/svelte/phone-input";

let value = $state("");
</script>

<PhoneInput
  defaultCountry="US"
  onChange={(next) => (value = next)}
  placeholder="Phone number"
  {value}
/>
