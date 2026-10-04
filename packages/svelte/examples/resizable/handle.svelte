<script lang="ts">
import { Resizable } from "@pisagor/svelte/resizable";
import { panelClassName } from "./helpers";
</script>

<div class="h-96 w-full">
  <Resizable
    class="size-full rounded-md border"
    defaultSize={[50, 50]}
    panels={[{ id: "1" }, { id: "2" }]}
  >
    <Resizable.Panel class={panelClassName()} id="1">Panel 1</Resizable.Panel>
    <Resizable.ResizeTrigger id="1:2" withHandle />
    <Resizable.Panel class={panelClassName()} id="2">Panel 2</Resizable.Panel>
  </Resizable>
</div>
