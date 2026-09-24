<script lang="ts">
import type { RatingGroupRootProps } from "@ark-ui/svelte/rating-group";
import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/svelte/rating-group";
import { type RatingRecipeSlot, ratingRecipe } from "@pisagor/recipes/rating";
import { cn } from "@pisagor/utils";
import StarIcon from "phosphor-svelte/lib/StarIcon";
import type { Component } from "svelte";
import { setRatingContext } from "./rating.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<RatingGroupRootProps, "class" | "children" | "onValueChange"> & {
  class?: string | undefined;
  classNames?: Partial<Record<RatingRecipeSlot, string>>;
  /** Custom icon component (defaults to StarIcon). */
  icon?: Component;
  onValueChange?: (value: number) => void;
  recipe?: typeof ratingRecipe;
  variant?: FormControlVariant;
};

let {
  variant: variantProp,
  allowHalf = false,
  count = 5,
  icon: Icon = StarIcon,
  onValueChange,
  class: className,
  classNames,
  recipe = ratingRecipe,
  ...rest
}: Props = $props();

const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
const slots = $derived(recipe());
const surfaceTone = $derived(variant === "secondary" ? "opacity-90" : undefined);

setRatingContext({
  get slots() {
    return slots;
  },
});

function handleValueChange(
  details: Parameters<NonNullable<RatingGroupRootProps["onValueChange"]>>[0],
) {
  onValueChange?.(details.value);
}
</script>

<RatingGroupPrimitive.Root
  {...rest}
  {allowHalf}
  class={slots.base({ class: cn(surfaceTone, className) })}
  {count}
  data-variant={variant}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  <RatingGroupPrimitive.Control class={slots.control({ class: cn(classNames?.control) })}>
    <RatingGroupPrimitive.Context>
      {#snippet render(
  api,
)}
        {#each api().items as item (item)}
          <RatingGroupPrimitive.Item
            class={slots.item({ class: cn(classNames?.item) })}
            index={item}
          >
            <RatingGroupPrimitive.ItemContext>
              {#snippet render(
  itemApi,
)}
                {@const state = itemApi()}
                <span
                  class={slots.indicator({ class: cn(classNames?.indicator) })}
                  data-half={state.half ? "" : undefined}
                  data-highlighted={state.highlighted ? "" : undefined}
                  data-part="item-indicator"
                  data-scope="rating"
                >
                  <Icon data-bg="" />
                  <Icon data-fg="" fill="currentColor" />
                </span>
              {/snippet}
            </RatingGroupPrimitive.ItemContext>
          </RatingGroupPrimitive.Item>
        {/each}
      {/snippet}
    </RatingGroupPrimitive.Context>

    <RatingGroupPrimitive.HiddenInput />
  </RatingGroupPrimitive.Control>
</RatingGroupPrimitive.Root>
