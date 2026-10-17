<script module lang="ts">
  import source from "./loading.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button } from "@pisagor/svelte";
</script>

<Button loading>Loading</Button>
