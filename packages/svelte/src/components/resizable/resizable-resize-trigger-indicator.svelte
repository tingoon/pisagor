<script lang="ts">
import {
  Splitter as SplitterPrimitive,
  type SplitterResizeTriggerIndicatorProps,
} from "@ark-ui/svelte/splitter";
import { cn } from "@pisagor/utils";
import { useResizable } from "./resizable.context";

let { class: className, ...rest }: SplitterResizeTriggerIndicatorProps =
  $props();
const { slots } = useResizable();
</script>

<SplitterPrimitive.ResizeTriggerIndicator
  {...rest}
  class={slots.resizeTriggerIndicator({ class: cn(className) })}
/>
