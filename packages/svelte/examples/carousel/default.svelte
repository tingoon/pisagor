<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Carousel } from "@pisagor/svelte";
</script>

<Carousel
  slides={[
    { content: "Slide 1", key: "1" },
    { content: "Slide 2", key: "2" },
    { content: "Slide 3", key: "3" },
  ]}
/>
