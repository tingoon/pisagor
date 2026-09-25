<script generics="T = unknown" lang="ts">
import type { TreeViewNodeProviderProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";

let { children, ...rest }: TreeViewNodeProviderProps<T> = $props();
</script>

<TreeViewPrimitive.NodeProvider {...rest}> {@render children?.()} </TreeViewPrimitive.NodeProvider>
