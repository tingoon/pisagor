<script lang="ts">
import {
  Splitter as SplitterPrimitive,
  type SplitterRootProviderProps,
} from "@ark-ui/svelte/splitter";
import type { ResizableProps as BaseResizableProps } from "@pisagor/props";
import { resizableRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setResizableContext } from "./resizable.context";

type Props = SplitterRootProviderProps & BaseResizableProps;

let {
  children,
  recipe = resizableRecipe,
  class: className,
  ...rest
}: Props = $props();
const slots = $derived(recipe());
setResizableContext({
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
