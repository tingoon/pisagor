<script module lang="ts">
  import source from "./with-button.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button, Kbd } from "@pisagor/svelte";
  import FloppyDiskIcon from "phosphor-svelte/lib/FloppyDiskIcon";
</script>

<Button variant="outline">
  <FloppyDiskIcon />
  Save
  <Kbd.Group class="translate-x-0.5">
    <Kbd variant="outline">Ctrl+S</Kbd>
  </Kbd.Group>
</Button>
