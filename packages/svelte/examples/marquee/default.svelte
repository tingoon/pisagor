<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Marquee } from "@pisagor/svelte";
</script>

<Marquee items={["Pisagor", "Svelte", "Ark UI", "Recipes"]} />
