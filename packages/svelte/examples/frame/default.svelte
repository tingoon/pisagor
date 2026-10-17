<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Frame } from "@pisagor/svelte";
</script>

<Frame>
  <Frame.Panel>
    <Frame.Header>
      <Frame.Title>Panel title</Frame.Title>
      <Frame.Description>Panel description</Frame.Description>
    </Frame.Header>
  </Frame.Panel>
</Frame>
