<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { PasswordField } from "@pisagor/svelte-form";
</script>

<PasswordField
  autocomplete="current-password"
  disabled
  id="password-field-disabled"
  label="Password"
  placeholder="Enter your password"
/>
