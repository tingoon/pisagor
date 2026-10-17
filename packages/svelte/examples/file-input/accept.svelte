<script module lang="ts">
  import source from "./accept.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { FileInput } from "@pisagor/svelte";
</script>

<FileInput accept="image/png,image/jpeg" />
