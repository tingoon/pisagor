<script lang="ts">
  import {
    Splitter as SplitterPrimitive,
    type SplitterResizeTriggerIndicatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./resizable.context";

  let { ...rest }: SplitterResizeTriggerIndicatorProps = $props();
  const part = withContext(() => rest, { name: "ResizeTriggerIndicator" });
</script>

<SplitterPrimitive.ResizeTriggerIndicator {...part.props} />
