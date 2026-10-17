<script module lang="ts">
  import source from "./file.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Input } from "@pisagor/svelte";
</script>

<Input type="file" />
