<script lang="ts">
import type { CollapsibleRootProps } from "@ark-ui/svelte/collapsible";
import { Collapsible as CollapsiblePrimitive } from "@ark-ui/svelte/collapsible";
import { collapsibleRecipe } from "@pisagor/recipes/collapsible";
import { cn } from "@pisagor/utils";
import { setCollapsibleContext } from "./collapsible.context";

type Props = Omit<CollapsibleRootProps, "class"> & {
  class?: string | undefined;
  recipe?: typeof collapsibleRecipe;
};

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
