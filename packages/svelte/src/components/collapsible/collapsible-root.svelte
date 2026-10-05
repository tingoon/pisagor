<script lang="ts">
import {
  Collapsible as CollapsiblePrimitive,
  type CollapsibleRootProps,
} from "@ark-ui/svelte/collapsible";
import type { CollapsibleProps as BaseCollapsibleProps } from "@pisagor/props";
import { collapsibleRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setCollapsibleContext } from "./collapsible.context";

type Props = CollapsibleRootProps & BaseCollapsibleProps;

let {
  lazyMount,
  unmountOnExit,
  children,
  collapsedHeight,
  recipe = collapsibleRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setCollapsibleContext({
  get slots() {
    return slots;
  },
});
</script>

<CollapsiblePrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  {collapsedHeight}
  data-partial-collapse={collapsedHeight ? "" : undefined}
  lazyMount={collapsedHeight ? false : lazyMount}
  unmountOnExit={collapsedHeight ? false : unmountOnExit}
>
  {@render children?.()}
</CollapsiblePrimitive.Root>
