<script module lang="ts">
  import source from "./orientation-vertical.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Tabs } from "@pisagor/svelte";
  import { numberedTabs } from "./helpers";
</script>

<Tabs defaultValue="tab-1" items={numberedTabs()} orientation="vertical" />
