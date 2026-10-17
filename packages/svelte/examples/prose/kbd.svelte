<script module lang="ts">
  import source from "./kbd.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Prose } from "@pisagor/svelte";
</script>

<Prose>
  <p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save your work.</p>
</Prose>
