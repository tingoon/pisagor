<script lang="ts">
  import { Button, Card, Carousel } from "@pisagor/svelte";
  import { CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";

  const count = 16;
</script>

<Carousel.Root slideCount={count} slidesPerPage={3}>
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
    {#each Array.from({ length: count }, (_, i) => i) as slideIndex}
      <Carousel.Item index={slideIndex}>
        <Card>
          <Card.Content class="flex h-40 items-center justify-center">
            <span class="text-2xl font-semibold">{slideIndex + 1}</span>
          </Card.Content>
        </Card>
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>
</Carousel.Root>
