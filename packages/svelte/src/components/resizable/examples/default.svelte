<script lang="ts">
import { Resizable } from "../index";
</script>

<Resizable panels={[{ id: "a" }, { id: "b" }]} style="height: 200px">
  <Resizable.Panel id="a">A</Resizable.Panel>
  <Resizable.ResizeTrigger id="a:b" withHandle />
  <Resizable.Panel id="b">B</Resizable.Panel>
</Resizable>
