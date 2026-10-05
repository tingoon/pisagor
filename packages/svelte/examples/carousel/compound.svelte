<script lang="ts">
import { Carousel } from "@pisagor/svelte";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<Carousel.Root slideCount={slides.length}>
  <Carousel.Control>
    <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
    <Carousel.NextTrigger>Next</Carousel.NextTrigger>
  </Carousel.Control>
  <Carousel.ItemGroup>
    {#each slides as slide, index}
      <Carousel.Item {index}>
        {slide.content}
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>
</Carousel.Root>
