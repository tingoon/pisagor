<script lang="ts">
import {
  RatingGroup as RatingGroupPrimitive,
  type RatingGroupRootProps,
} from "@ark-ui/svelte/rating-group";
import type { RatingProps as BaseRatingProps } from "@pisagor/props";
import { ratingRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { Context } from "./rating.context";

type FormControlVariant = "primary" | "secondary";

type Props = RatingGroupRootProps & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
} & BaseRatingProps;

let {
  variant: variantProp,
  allowHalf = false,
  count = 5,
  children,
  recipe = ratingRecipe,
  class: className,
  ...rest
}: Props = $props();

const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
const slots = $derived(recipe());
const surfaceTone = $derived(
  variant === "secondary" ? "opacity-90" : undefined,
);

Context.set({
  get slots() {
    return slots;
  },
});
</script>

<RatingGroupPrimitive.Root
  {...rest}
  {allowHalf}
  class={slots.base({ class: cn(surfaceTone, className) })}
  {count}
  data-variant={variant}
>
  {@render children?.()}
</RatingGroupPrimitive.Root>
