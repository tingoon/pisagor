<script lang="ts">
import {
  Splitter as SplitterPrimitive,
  type SplitterRootProps,
} from "@ark-ui/svelte/splitter";
import type { ResizableProps as BaseResizableProps } from "@pisagor/props";
import { withProvider } from "./resizable.context";

type Props = SplitterRootProps & BaseResizableProps;

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<SplitterPrimitive.Root {...root.props}>
  {@render children?.()}
</SplitterPrimitive.Root>
