<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { SwitchField } from "@pisagor/svelte-form";
</script>

<SwitchField
  error="You must enable notifications to continue."
  id="switch-field-notifications-invalid"
  invalid
  label="Enable notifications"
/>
