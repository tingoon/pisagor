<script lang="ts">
import type { SplitterContextProps } from "@ark-ui/svelte/splitter";
import { Splitter as SplitterPrimitive } from "@ark-ui/svelte/splitter";

let props: SplitterContextProps = $props();
</script>

<SplitterPrimitive.Context {...props} />
