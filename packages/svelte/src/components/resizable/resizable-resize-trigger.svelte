<script lang="ts">
import type { SplitterResizeTriggerProps } from "@ark-ui/svelte/splitter";
import { Splitter as SplitterPrimitive } from "@ark-ui/svelte/splitter";
import { cn } from "@pisagor/utils";
import DotsSixVerticalIcon from "phosphor-svelte/lib/DotsSixVerticalIcon";
import { useResizable } from "./resizable.context";
import ResizableResizeTriggerIndicator from "./resizable-resize-trigger-indicator.svelte";

type Props = Omit<SplitterResizeTriggerProps, "class"> & {
  class?: string | undefined;
  withHandle?: boolean;
};

let { children, withHandle = false, class: className, ...rest }: Props = $props();
const { slots } = useResizable();
</script>

<SplitterPrimitive.ResizeTrigger
  {...rest}
  aria-label="Resize"
  class={slots.resizeTrigger({ class: cn(className) })}
>
  {#if withHandle}
    <div class={slots.resizeTriggerHandle()}>
      <DotsSixVerticalIcon class={slots.resizeTriggerIcon()} />
    </div>
  {:else if children}
    {@render children()}
  {:else}
    <ResizableResizeTriggerIndicator />
  {/if}
</SplitterPrimitive.ResizeTrigger>
