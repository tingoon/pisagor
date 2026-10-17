<script module lang="ts">
  import source from "./orientation-vertical.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Carousel } from "@pisagor/svelte";
  import { imageSlides } from "./helpers";
</script>

<Carousel class="h-40" orientation="vertical" slides={imageSlides()} />
