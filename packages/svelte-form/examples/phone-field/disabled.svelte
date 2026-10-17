<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { PhoneField } from "@pisagor/svelte-form";
</script>

<PhoneField
  defaultCountry="US"
  disabled
  id="phone-field-disabled"
  label="Phone number"
  placeholder="Enter phone number"
/>
