<script module lang="ts">
  import source from "./without-indicator.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Tabs } from "@pisagor/svelte";
  import { profileTabs } from "./helpers";
</script>

<Tabs defaultValue="tab-1" items={profileTabs()} showIndicator={false} />
