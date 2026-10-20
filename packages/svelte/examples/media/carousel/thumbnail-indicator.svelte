<script lang="ts">
  import { Button, Carousel } from "@pisagor/svelte";
  import { imageSources } from "./helpers";
  import { CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";

  const slides = imageSources();
</script>

<Carousel.Root loop slideCount={slides.length}>
  <Carousel.Control class="relative">
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

    <Carousel.ItemGroup>
      {#each slides as slide, index}
        <Carousel.Item {index}>
          <img alt={slide.alt} height={300} src={slide.src} width={500} />
        </Carousel.Item>
      {/each}
    </Carousel.ItemGroup>
  </Carousel.Control>
  <Carousel.IndicatorGroup class="mt-4">
    {#each slides as slide, index}
      <Carousel.Indicator class="size-10 rounded-md" {index}>
        <img alt={slide.alt} height={40} src={slide.src} width={40} />
      </Carousel.Indicator>
    {/each}
  </Carousel.IndicatorGroup>
</Carousel.Root>
