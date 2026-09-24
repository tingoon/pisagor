<script lang="ts">
import type { SplitterPanelProps } from "@ark-ui/svelte/splitter";
import { Splitter as SplitterPrimitive } from "@ark-ui/svelte/splitter";

let { children, ...rest }: SplitterPanelProps = $props();
</script>

<SplitterPrimitive.Panel {...rest}> {@render children?.()} </SplitterPrimitive.Panel>
