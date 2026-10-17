<script module lang="ts">
  import source from "./pill.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button } from "@pisagor/svelte";
  import PlusIcon from "phosphor-svelte/lib/PlusIcon";
</script>

<Button pill variant="outline">
  <PlusIcon />
  Add
</Button>
