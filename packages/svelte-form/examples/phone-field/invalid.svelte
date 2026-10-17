<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { PhoneField } from "@pisagor/svelte-form";
</script>

<PhoneField
  defaultCountry="US"
  error="Please enter a phone number."
  id="phone-field-invalid"
  invalid
  label="Phone number"
  placeholder="Enter phone number"
/>
