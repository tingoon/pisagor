<script module lang="ts">
  import source from "./ol.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Prose } from "@pisagor/svelte";
</script>

<Prose>
  <ol>
    <li>First, gather the ingredients.</li>
    <li>Then, mix them together.</li>
    <li>Finally, bake for 30 minutes.</li>
  </ol>
</Prose>
