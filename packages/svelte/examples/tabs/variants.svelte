<script lang="ts">
import { Tabs } from "@pisagor/svelte";
import { variantTabs } from "./helpers";
</script>

<div class="flex flex-col gap-2">
  <Tabs defaultValue="tab-1" items={variantTabs("Default variant")} />
  <Tabs
    defaultValue="tab-1"
    items={variantTabs("Underline variant")}
    variant="underline"
  />
  <Tabs
    defaultValue="tab-1"
    items={variantTabs("Underline + vertical")}
    orientation="vertical"
    variant="underline"
  />
</div>
