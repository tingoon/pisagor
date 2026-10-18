<script lang="ts">
  import {
    Splitter as SplitterPrimitive,
    type SplitterRootProviderProps,
  } from "@ark-ui/svelte";
  import type { ResizableRootContract } from "@pisagor/props";
  import { resizableRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { Context } from "./resizable.context";

  type Props = SplitterRootProviderProps & ResizableRootContract;

  let {
    children,
    recipe = resizableRecipe,
    class: className,
    ...rest
  }: Props = $props();
  const slots = $derived(recipe());
  Context.set({
    get slots() {
      return slots;
    },
  });
</script>

<SplitterPrimitive.RootProvider
  {...rest}
  class={slots.base({ class: cn(className) })}
>
  {@render children?.()}
</SplitterPrimitive.RootProvider>
