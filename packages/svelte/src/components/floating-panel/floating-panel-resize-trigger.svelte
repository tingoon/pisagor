<script lang="ts">
  import {
    FloatingPanel as FloatingPanelPrimitive,
    type FloatingPanelResizeTriggerProps,
  } from "@ark-ui/svelte";

  let props: FloatingPanelResizeTriggerProps = $props();
</script>

<FloatingPanelPrimitive.ResizeTrigger {...props} />
