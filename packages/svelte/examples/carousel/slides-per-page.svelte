<script lang="ts">
import { Card } from "@pisagor/svelte";
import { Carousel } from "@pisagor/svelte/carousel";

const count = 16;
</script>

<Carousel.Root slideCount={count} slidesPerPage={3}>
  <Carousel.Control>
    <Carousel.PrevTrigger />
    <Carousel.NextTrigger />
  </Carousel.Control>
  <Carousel.ItemGroup>
    {#each Array.from({ length: count }, (_, i) => i) as slideIndex}
      <Carousel.Item index={slideIndex}>
        <Card>
          <Card.Content class="flex h-40 items-center justify-center">
            <span class="font-semibold text-2xl">{slideIndex + 1}</span>
          </Card.Content>
        </Card>
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>
</Carousel.Root>
