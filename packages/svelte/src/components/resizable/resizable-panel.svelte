<script lang="ts">
  import {
    Splitter as SplitterPrimitive,
    type SplitterPanelProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: SplitterPanelProps = $props();
</script>

<SplitterPrimitive.Panel {...rest}>
  {@render children?.()}
</SplitterPrimitive.Panel>
