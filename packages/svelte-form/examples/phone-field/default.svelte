<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { PhoneField } from "@pisagor/svelte-form";
</script>

<PhoneField
  defaultCountry="GB"
  description="We'll only call about your delivery."
  id="phone-field-contact"
  label="Contact number"
  placeholder="Enter phone number"
/>
