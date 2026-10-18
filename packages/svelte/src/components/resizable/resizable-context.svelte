<script lang="ts">
  import {
    Splitter as SplitterPrimitive,
    type SplitterContextProps,
  } from "@ark-ui/svelte";

  let props: SplitterContextProps = $props();
</script>

<SplitterPrimitive.Context {...props} />
