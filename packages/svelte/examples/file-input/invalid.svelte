<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { FileInput } from "@pisagor/svelte";
</script>

<FileInput invalid />
