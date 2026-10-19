<script lang="ts">
  import {
    Splitter as SplitterPrimitive,
    type SplitterRootProps,
  } from "@ark-ui/svelte";
  import type { ResizableRootContract } from "@pisagor/contracts";
  import { withProvider } from "./resizable.context";

  type Props = SplitterRootProps & ResizableRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<SplitterPrimitive.Root {...root.props}>
  {@render children?.()}
</SplitterPrimitive.Root>
