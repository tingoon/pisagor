<script lang="ts">
import {
  type SplitterPanelProps,
  Splitter as SplitterPrimitive,
} from "@ark-ui/svelte/splitter";

let { children, ...rest }: SplitterPanelProps = $props();
</script>

<SplitterPrimitive.Panel {...rest}>
  {@render children?.()}
</SplitterPrimitive.Panel>
