<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Tabs } from "@pisagor/svelte";
  import { profileTabs } from "./helpers";

  const items = profileTabs().map((tab) =>
    tab.value === "tab-2" ? { ...tab, disabled: true } : tab,
  );
</script>

<Tabs defaultValue="tab-1" {items} />
