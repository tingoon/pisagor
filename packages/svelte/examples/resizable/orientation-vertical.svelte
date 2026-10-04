<script lang="ts">
import { Resizable } from "@pisagor/svelte";
import { panelClassName } from "./helpers";
</script>

<div class="h-112 w-full">
  <Resizable
    class="size-full rounded-md border"
    defaultSize={[50, 50]}
    orientation="vertical"
    panels={[{ id: "1" }, { id: "2" }]}
  >
    <Resizable.Panel class={panelClassName("vertical")} id="1">Top</Resizable.Panel>
    <Resizable.ResizeTrigger id="1:2" withHandle />
    <Resizable.Panel class={panelClassName("vertical")} id="2">Bottom</Resizable.Panel>
  </Resizable>
</div>
