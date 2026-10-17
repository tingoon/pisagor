<script module lang="ts">
  import source from "./with-link.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Badge } from "@pisagor/svelte";
  import ArrowUpRightIcon from "phosphor-svelte/lib/ArrowUpRightIcon";
  import PlusCircleIcon from "phosphor-svelte/lib/PlusCircleIcon";
</script>

<Badge>
  <a href="https://example.com/components">
    <PlusCircleIcon />
    New components <ArrowUpRightIcon />
  </a>
</Badge>
