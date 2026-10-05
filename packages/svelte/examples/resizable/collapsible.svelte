<script lang="ts">
import { Resizable } from "@pisagor/svelte";
import { panelClassName } from "./helpers";
</script>

<div class="h-96 w-full">
  <Resizable
    class="size-full rounded-md border"
    defaultSize={[25, 75]}
    panels={[
      { collapsedSize: 0, collapsible: true, id: "sidebar", minSize: 15 },
      { id: "main", minSize: 40 },
    ]}
  >
    <Resizable.Panel class={panelClassName()} id="sidebar"
      >Sidebar</Resizable.Panel
    >
    <Resizable.ResizeTrigger id="sidebar:main" withHandle />
    <Resizable.Panel class={panelClassName()} id="main">Main</Resizable.Panel>
  </Resizable>
</div>
