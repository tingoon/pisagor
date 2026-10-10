<script lang="ts">
import {
  ScrollArea as ScrollAreaPrimitive,
  type ScrollAreaRootProps,
} from "@ark-ui/svelte/scroll-area";
import type { ScrollAreaProps as BaseScrollAreaProps } from "@pisagor/props";
import { withProvider } from "./scroll-area.context";

type Props = ScrollAreaRootProps & BaseScrollAreaProps;

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<ScrollAreaPrimitive.Root {...root.props}>
  {@render children?.()}
</ScrollAreaPrimitive.Root>
