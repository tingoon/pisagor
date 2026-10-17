<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Drawer } from "@pisagor/svelte";
</script>

<Drawer>
  <Drawer.Trigger>Open drawer</Drawer.Trigger>
  <Drawer.Content>
    <Drawer.ContentInner>
      <Drawer.Header description="Swipe to dismiss" title="Drawer" />
      <Drawer.Body>Drawer body</Drawer.Body>
      <Drawer.Footer>
        <Drawer.CloseTrigger>Close</Drawer.CloseTrigger>
      </Drawer.Footer>
    </Drawer.ContentInner>
  </Drawer.Content>
</Drawer>
