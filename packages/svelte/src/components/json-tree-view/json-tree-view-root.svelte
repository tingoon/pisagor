<script lang="ts">
import {
  JsonTreeView as JsonTreeViewPrimitive,
  type JsonTreeViewRootProps,
} from "@ark-ui/svelte/json-tree-view";
import type { JsonTreeViewProps as BaseJsonTreeViewProps } from "@pisagor/props";
import { withProvider } from "./json-tree-view.context";

type Props = JsonTreeViewRootProps & BaseJsonTreeViewProps;

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<JsonTreeViewPrimitive.Root {...root.props}>
  {@render children?.()}
</JsonTreeViewPrimitive.Root>
