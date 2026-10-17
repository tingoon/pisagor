<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { CheckboxField } from "@pisagor/svelte-form";
</script>

<CheckboxField
  disabled
  id="checkbox-field-terms-disabled"
  label="I accept the terms and conditions"
/>
