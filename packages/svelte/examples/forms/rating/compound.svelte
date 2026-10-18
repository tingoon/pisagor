<script lang="ts">
  import { Rating } from "@pisagor/svelte";
  import { StarIcon } from "phosphor-svelte";
</script>

<Rating.Root count={5} defaultValue={3}>
  <Rating.Control>
    <Rating.Context>
      {#snippet render(rating)}
        {#each rating().items as item (item)}
          <Rating.Item index={item}>
            <Rating.ItemContext>
              {#snippet render(itemState)}
                <Rating.Indicator
                  data-highlighted={itemState().highlighted ? "" : undefined}
                >
                  <StarIcon data-bg="" />
                  <StarIcon data-fg="" weight="fill" />
                </Rating.Indicator>
              {/snippet}
            </Rating.ItemContext>
          </Rating.Item>
        {/each}
      {/snippet}
    </Rating.Context>
    <Rating.HiddenInput />
  </Rating.Control>
</Rating.Root>
