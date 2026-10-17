<script module lang="ts">
  import source from "./kbd-group.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Kbd } from "@pisagor/svelte";
</script>

<div class="text-muted-foreground text-sm">
  Use{" "}
  <Kbd.Group>
    <Kbd>Ctrl</Kbd>
    <span>+</span>
    <Kbd>K</Kbd>
  </Kbd.Group>{" "}
  to open the command palette
</div>
