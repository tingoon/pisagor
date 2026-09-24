<script lang="ts">
import type { SplitterRootProviderProps } from "@ark-ui/svelte/splitter";
import { Splitter as SplitterPrimitive } from "@ark-ui/svelte/splitter";
import { resizableRecipe } from "@pisagor/recipes/resizable";
import { cn } from "@pisagor/utils";
import { setResizableContext } from "./resizable.context";

type Props = Omit<SplitterRootProviderProps, "class"> & {
  class?: string | undefined;
  recipe?: typeof resizableRecipe;
};

let { children, recipe = resizableRecipe, class: className, ...rest }: Props = $props();
const slots = $derived(recipe());
setResizableContext({
  get slots() {
    return slots;
  },
});
</script>

<SplitterPrimitive.RootProvider {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</SplitterPrimitive.RootProvider>
