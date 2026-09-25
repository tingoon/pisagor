<script lang="ts">
import type { FloatingPanelBodyProps as ArkProps } from "@ark-ui/svelte/floating-panel";
import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/svelte/floating-panel";
import { floatingPanelRecipe } from "@pisagor/recipes/floating-panel";
import { cn } from "@pisagor/utils";
import { ScrollArea } from "../scroll-area";
import { useFloatingPanel } from "./floating-panel.context";

type Props = Omit<ArkProps, "class"> & {
  class?: string | undefined;
  scrollFade?: boolean;
};

let { scrollFade = false, children, class: className, ...rest }: Props = $props();
const ctx = useFloatingPanel();
const slots = $derived(ctx?.slots ?? floatingPanelRecipe());
</script>

<ScrollArea {scrollFade}>
  <FloatingPanelPrimitive.Body {...rest} class={slots.body({ class: cn(className) })}>
    {@render children?.()}
  </FloatingPanelPrimitive.Body>
</ScrollArea>
