<script module lang="ts">
  import source from "./blockquote.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Prose } from "@pisagor/svelte";
</script>

<Prose>
  <blockquote>
    "After all," he said, "everyone enjoys a good joke, so it's only fair that
    they should pay for the privilege."
  </blockquote>
</Prose>
