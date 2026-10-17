<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { FileField } from "@pisagor/svelte-form";
</script>

<FileField disabled id="file-field-avatar-disabled" label="Avatar" />
