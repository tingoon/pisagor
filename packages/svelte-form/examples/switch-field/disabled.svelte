<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { SwitchField } from "@pisagor/svelte-form";
</script>

<SwitchField
  description="Get release updates by email."
  disabled
  id="switch-field-notifications-disabled"
  label="Enable notifications"
/>
