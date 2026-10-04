<script lang="ts">
import { Carousel } from "@pisagor/svelte/carousel";
import { imageSources } from "./helpers";

const slides = imageSources();
</script>

<Carousel.Root loop slideCount={slides.length}>
      <Carousel.Control class="relative">
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
        <Carousel.NextTrigger>Next</Carousel.NextTrigger>

        <Carousel.ItemGroup>
          {#each slides as slide}
<Carousel.Item index={index}>
              <img alt={slide.alt} height={300} src={slide.src} width={500} />
            </Carousel.Item>
{/each}
        </Carousel.ItemGroup>
      </Carousel.Control>
      <Carousel.IndicatorGroup class="mt-4">
        {#each slides as slide}
<Carousel.Indicator
            class="size-10 rounded-md"
            index={index}
          >
            <img alt={slide.alt} height={40} src={slide.src} width={40} />
          </Carousel.Indicator>
{/each}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
