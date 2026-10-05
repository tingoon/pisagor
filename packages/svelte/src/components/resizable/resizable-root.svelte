<script lang="ts">
import {
  Splitter as SplitterPrimitive,
  type SplitterRootProps,
} from "@ark-ui/svelte/splitter";
import type { ResizableProps as BaseResizableProps } from "@pisagor/props";
import { resizableRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setResizableContext } from "./resizable.context";

type Props = SplitterRootProps & BaseResizableProps;

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

<SplitterPrimitive.Root {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</SplitterPrimitive.Root>
