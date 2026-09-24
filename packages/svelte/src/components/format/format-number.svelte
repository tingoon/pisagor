<script lang="ts">
import type { FormatNumberProps } from "@ark-ui/svelte/format";
import { Format as FormatPrimitive } from "@ark-ui/svelte/format";

let props: FormatNumberProps = $props();
</script>

<FormatPrimitive.Number {...props} />
