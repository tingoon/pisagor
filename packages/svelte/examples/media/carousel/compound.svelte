<script lang="ts">
  import { Button, Carousel } from "@pisagor/svelte";
  import { numberedSlides } from "./helpers";
  import { CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";

  const slides = numberedSlides(8);
</script>

<Carousel.Root slideCount={slides.length}>
  <Carousel.Control>
    <Carousel.PrevTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          clickEffect={false}
          pill
          size="icon-md"
          variant="outline"
        >
          <CaretLeftIcon aria-hidden="true" />
        </Button>
      {/snippet}
    </Carousel.PrevTrigger>
    <Carousel.NextTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          clickEffect={false}
          pill
          size="icon-md"
          variant="outline"
        >
          <CaretRightIcon aria-hidden="true" />
        </Button>
      {/snippet}
    </Carousel.NextTrigger>
  </Carousel.Control>
  <Carousel.ItemGroup>
    {#each slides as slide, index}
      <Carousel.Item {index}>
        {slide.content}
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>
</Carousel.Root>
