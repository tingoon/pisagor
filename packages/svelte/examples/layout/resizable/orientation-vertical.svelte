<script lang="ts">
  import { Resizable } from "@pisagor/svelte";
  import { panelClassName } from "./helpers";
  import { DotsSixVerticalIcon } from "phosphor-svelte";
</script>

<div class="h-112 w-full">
  <Resizable
    class="size-full rounded-md border"
    defaultSize={[50, 50]}
    orientation="vertical"
    panels={[{ id: "1" }, { id: "2" }]}
  >
    <Resizable.Panel class={panelClassName("vertical")} id="1"
      >Top</Resizable.Panel
    >
    <Resizable.ResizeTrigger id="1:2">
      <Resizable.ResizeTriggerHandle>
        <DotsSixVerticalIcon class="size-2.5" />
      </Resizable.ResizeTriggerHandle>
    </Resizable.ResizeTrigger>
    <Resizable.Panel class={panelClassName("vertical")} id="2"
      >Bottom</Resizable.Panel
    >
  </Resizable>
</div>
