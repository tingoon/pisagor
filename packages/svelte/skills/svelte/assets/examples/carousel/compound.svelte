<script lang="ts">
import { Carousel } from "@pisagor/svelte/carousel";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<Carousel.Root slideCount={slides.length}>
      <Carousel.Control>
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
        <Carousel.NextTrigger>Next</Carousel.NextTrigger>
      </Carousel.Control>
      <Carousel.ItemGroup>
        {#each slides as slide}
<Carousel.Item index={index}>
            {slide.content}
          </Carousel.Item>
{/each}
      </Carousel.ItemGroup>
    </Carousel.Root>
