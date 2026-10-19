<script lang="ts">
  import { Resizable } from "@pisagor/svelte";
  import { DotsSixVerticalIcon } from "phosphor-svelte";
</script>

<Resizable panels={[{ id: "a" }, { id: "b" }]} style="height: 200px">
  <Resizable.Panel id="a">A</Resizable.Panel>
  <Resizable.ResizeTrigger id="a:b">
    <Resizable.ResizeTriggerHandle>
      <DotsSixVerticalIcon class="size-2.5" />
    </Resizable.ResizeTriggerHandle>
  </Resizable.ResizeTrigger>
  <Resizable.Panel id="b">B</Resizable.Panel>
</Resizable>
