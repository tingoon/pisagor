<script module lang="ts">
  import source from "./orientation-horizontal.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Carousel } from "@pisagor/svelte";
  import { imageSlides } from "./helpers";
</script>

<Carousel slides={imageSlides()} />
