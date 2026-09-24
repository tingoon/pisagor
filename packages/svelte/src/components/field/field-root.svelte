<script lang="ts">
import type { FieldRootProps as ArkRootProps } from "@ark-ui/svelte/field";
import { Field as FieldPrimitive } from "@ark-ui/svelte/field";
import { type FieldVariantProps, fieldRecipe } from "@pisagor/recipes/field";
import { cn } from "@pisagor/utils";
import { setFieldContext } from "./field.context";

type Props = Omit<ArkRootProps, "class"> &
  FieldVariantProps & {
    class?: string | undefined;
    recipe?: typeof fieldRecipe;
  };

let {
  orientation = "vertical",
  reverse = false,
  recipe = fieldRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe({ orientation, reverse }));
setFieldContext({
  get slots() {
    return slots;
  },
});
</script>

<FieldPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-orientation={orientation}
>
  {@render children?.()}
</FieldPrimitive.Root>
