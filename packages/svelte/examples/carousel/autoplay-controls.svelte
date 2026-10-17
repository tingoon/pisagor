<script lang="ts">
  import { Carousel } from "@pisagor/svelte";
  import { numberedSlides } from "./helpers";

  const slides = numberedSlides(8);
</script>

<Carousel.Root autoplay loop slideCount={slides.length}>
  <Carousel.Control>
    <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
    <Carousel.AutoplayTrigger />
    <Carousel.ProgressText />
    <Carousel.NextTrigger>Next</Carousel.NextTrigger>
  </Carousel.Control>
  <Carousel.ItemGroup>
    {#each slides as slide, index (slide.key)}
      <Carousel.Item {index}>{slide.content}</Carousel.Item>
    {/each}
  </Carousel.ItemGroup>
</Carousel.Root>
