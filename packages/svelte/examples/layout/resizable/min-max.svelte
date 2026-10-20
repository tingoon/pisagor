<script lang="ts">
  import { Resizable } from "@pisagor/svelte";
  import { panelClassName } from "./helpers";
  import { DotsSixVerticalIcon } from "phosphor-svelte";
</script>

<div class="h-96 w-full">
  <Resizable
    class="size-full rounded-md border"
    defaultSize={[30, 70]}
    panels={[{ id: "1", maxSize: 40, minSize: 25 }, { id: "2" }]}
  >
    <Resizable.Panel class={panelClassName()} id="1">Sidebar</Resizable.Panel>
    <Resizable.ResizeTrigger id="1:2">
      <Resizable.ResizeTriggerHandle>
        <DotsSixVerticalIcon class="size-2.5" />
      </Resizable.ResizeTriggerHandle>
    </Resizable.ResizeTrigger>
    <Resizable.Panel class={panelClassName()} id="2">Content</Resizable.Panel>
  </Resizable>
</div>
