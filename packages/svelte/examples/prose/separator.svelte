<script module lang="ts">
  import source from "./separator.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Prose } from "@pisagor/svelte";
</script>

<Prose>
  <p>First section of content.</p>
  <hr />
  <p>Second section after the divider.</p>
</Prose>
