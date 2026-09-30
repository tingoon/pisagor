<script lang="ts">
import { PhoneInput } from "../../../../../src/phone-input";

let value = $state("");
</script>

<PhoneInput
  defaultCountry="US"
  onChange={(next) => {
  value = next;
}}
  placeholder="Phone number"
  {value}
/>
