<script lang="ts">
import type { SplitterResizeTriggerIndicatorProps } from "@ark-ui/svelte/splitter";
import { Splitter as SplitterPrimitive } from "@ark-ui/svelte/splitter";
import { cn } from "@pisagor/utils";
import { useResizable } from "./resizable.context";

type Props = Omit<SplitterResizeTriggerIndicatorProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useResizable();
</script>

<SplitterPrimitive.ResizeTriggerIndicator
  {...rest}
  class={slots.resizeTriggerIndicator({ class: cn(className) })}
/>
