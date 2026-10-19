<script lang="ts">
  import { Button, Carousel } from "@pisagor/svelte";
  import { numberedSlides } from "./helpers";
  import {
    CaretLeftIcon,
    CaretRightIcon,
    PauseIcon,
    PlayIcon,
  } from "phosphor-svelte";

  const slides = numberedSlides(8);
</script>

<Carousel.Root autoplay loop slideCount={slides.length}>
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
    <Carousel.AutoplayTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          clickEffect={false}
          pill
          size="icon-md"
          variant="outline"
        >
          <Carousel.AutoplayIndicator>
            {#snippet fallback()}
              <PlayIcon aria-hidden="true" />
            {/snippet}
            <PauseIcon aria-hidden="true" />
          </Carousel.AutoplayIndicator>
        </Button>
      {/snippet}
    </Carousel.AutoplayTrigger>
    <Carousel.ProgressText />
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
    {#each slides as slide, index (slide.key)}
      <Carousel.Item {index}>{slide.content}</Carousel.Item>
    {/each}
  </Carousel.ItemGroup>
</Carousel.Root>
