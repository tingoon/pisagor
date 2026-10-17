<script module lang="ts">
  import source from "./without-icon.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Alert } from "@pisagor/svelte";
</script>

<Alert
  description="Pass icon={null} to hide the default variant icon."
  icon={null}
  title="Saved"
  variant="success"
/>
