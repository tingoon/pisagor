<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { PasswordField } from "@pisagor/svelte-form";
</script>

<PasswordField
  autocomplete="new-password"
  description="At least 8 characters, including a number."
  id="password-field-new"
  label="New password"
  placeholder="Create a password"
/>
