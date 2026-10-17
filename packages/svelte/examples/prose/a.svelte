<script module lang="ts">
  import source from "./a.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Prose } from "@pisagor/svelte";
</script>

<Prose>
  <p>
    Read more{" "}
    <a href="https://example.com/about-the-joke-tax">about the joke tax</a>{" "}
    in the kingdom archives.
  </p>
</Prose>
