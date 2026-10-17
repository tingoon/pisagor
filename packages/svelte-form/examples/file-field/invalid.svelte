<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { FileField } from "@pisagor/svelte-form";
</script>

<FileField
  error="Please choose a file."
  id="file-field-avatar-invalid"
  invalid
  label="Avatar"
/>
