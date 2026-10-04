<script lang="ts">
import { Resizable } from "@pisagor/svelte";
import { panelClassName } from "./helpers";
</script>

<div class="h-96 w-full">
  <Resizable
    class="size-full rounded-md border"
    defaultSize={[20, 60, 20]}
    panels={[
  { id: "1", minSize: 20 },
  { id: "2", minSize: 40 },
  { id: "3", minSize: 20 },
]}
  >
    <Resizable.Panel class={panelClassName()} id="1">Left</Resizable.Panel>
    <Resizable.ResizeTrigger id="1:2" withHandle />
    <Resizable.Panel class={panelClassName()} id="2">Center</Resizable.Panel>
    <Resizable.ResizeTrigger id="2:3" withHandle />
    <Resizable.Panel class={panelClassName()} id="3">Right</Resizable.Panel>
  </Resizable>
</div>
