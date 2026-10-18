<script lang="ts">
  import { Tabs } from "@pisagor/svelte";
  import { profileTabs } from "./helpers";
</script>

<Tabs defaultValue="tab-1" items={profileTabs()} showIndicator={false} />
