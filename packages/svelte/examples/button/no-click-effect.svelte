<script module lang="ts">
  import source from "./no-click-effect.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button } from "@pisagor/svelte";
</script>

<Button clickEffect={false}>Button</Button>
