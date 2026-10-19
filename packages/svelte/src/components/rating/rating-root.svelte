<script lang="ts">
  import {
    RatingGroup as RatingGroupPrimitive,
    type RatingGroupRootProps,
  } from "@ark-ui/svelte";
  import type { RatingRootContract } from "@pisagor/contracts";
  import { ratingRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  import { Context } from "./rating.context";

  type FormControlVariant = "primary" | "secondary";

  type Props = RatingGroupRootProps & {
    /** Visual shell variant. Defaults to `primary`. */
    variant?: FormControlVariant;
  } & RatingRootContract;

  let {
    variant: variantProp,
    allowHalf = false,
    count = 5,
    children,
    size = "md",
    recipe = ratingRecipe,
    class: className,
    ...rest
  }: Props = $props();

  const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
  const slots = $derived(recipe({ size }));
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
