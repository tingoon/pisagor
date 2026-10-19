<script lang="ts">
  import {
    JsonTreeView as JsonTreeViewPrimitive,
    type JsonTreeViewRootProps,
  } from "@ark-ui/svelte";
  import type { JsonTreeViewRootContract } from "@pisagor/contracts";
  import { withProvider } from "./json-tree-view.context";

  type Props = JsonTreeViewRootProps & JsonTreeViewRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<JsonTreeViewPrimitive.Root {...root.props}>
  {@render children?.()}
</JsonTreeViewPrimitive.Root>
