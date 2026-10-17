<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { FileField } from "@pisagor/svelte-form";
</script>

<FileField
  accept="application/pdf"
  description="PDF only, up to 5 MB."
  id="file-field-resume"
  label="Resume"
/>
