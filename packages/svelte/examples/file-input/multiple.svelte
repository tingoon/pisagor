<script module lang="ts">
  import source from "./multiple.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { FileInput } from "@pisagor/svelte";
</script>

<FileInput multiple />
