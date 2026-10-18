<script lang="ts">
  import {
    Splitter as SplitterPrimitive,
    type SplitterResizeTriggerProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import DotsSixVerticalIcon from "phosphor-svelte/lib/DotsSixVerticalIcon";
  import { useMessageResolver } from "../provider/context";
  import { useResizable } from "./resizable.context";
  import ResizableResizeTriggerIndicator from "./resizable-resize-trigger-indicator.svelte";

  const t = useMessageResolver();

  type Props = SplitterResizeTriggerProps & { withHandle?: boolean };

  let {
    children,
    withHandle = false,
    class: className,
    ...rest
  }: Props = $props();
  const styles = useResizable();
  const slots = $derived(styles.slots);
</script>

<SplitterPrimitive.ResizeTrigger
  aria-label={t("resizable.resize")}
  {...rest}
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
