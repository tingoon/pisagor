<script generics="T = unknown" lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewNodeProviderProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: TreeViewNodeProviderProps<T> = $props();
</script>

<TreeViewPrimitive.NodeProvider {...rest}>
  {@render children?.()}
</TreeViewPrimitive.NodeProvider>
