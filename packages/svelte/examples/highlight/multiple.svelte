<script module lang="ts">
  import source from "./multiple.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Highlight } from "@pisagor/svelte";
</script>

<p class="text-foreground text-base leading-relaxed">
  <Highlight
    query={["React", "Vue", "Astro"]}
    text="Use Pisagor with React, Vue, Solid, Svelte, or Astro."
  />
</p>
