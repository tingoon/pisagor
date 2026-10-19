<script lang="ts">
  import {
    Splitter as SplitterPrimitive,
    type SplitterResizeTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withContext } from "./resizable.context";

  /**
   * Resize trigger with a localized default `aria-label`; compose the indicator
   * / handle yourself.
   */
  let { children, ...rest }: SplitterResizeTriggerProps = $props();
  const { m } = useLocale();
  const part = withContext(
    () => ({ "aria-label": m("resizable.resize"), ...rest }),
    { name: "ResizeTrigger" },
  );
</script>

<SplitterPrimitive.ResizeTrigger {...part.props}>
  {@render children?.()}
</SplitterPrimitive.ResizeTrigger>
