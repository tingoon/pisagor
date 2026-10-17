<script module lang="ts">
  import source from "./on-files-change.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { FileInput } from "@pisagor/svelte";
</script>

<FileInput accept="image/*" multiple onFilesChange={() => undefined} />
