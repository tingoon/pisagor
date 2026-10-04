<script lang="ts">
import { Resizable } from "@pisagor/svelte/resizable";
import { panelClassName } from "./helpers";
</script>

<div class="h-96 w-full">
  <Resizable
    class="size-full rounded-md border"
    defaultSize={[50, 50]}
    orientation="horizontal"
    panels={[{ id: "1" }, { id: "2" }]}
  >
    <Resizable.Panel class={panelClassName()} id="1">Left</Resizable.Panel>
    <Resizable.ResizeTrigger id="1:2" withHandle />
    <Resizable.Panel class={panelClassName()} id="2">Right</Resizable.Panel>
  </Resizable>
</div>
