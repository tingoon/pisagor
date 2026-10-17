<script module lang="ts">
  import source from "./with-icon.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Status } from "@pisagor/svelte";
  import PlusIcon from "phosphor-svelte/lib/PlusIcon";
</script>

<Status size="lg">
  <PlusIcon />
</Status>
