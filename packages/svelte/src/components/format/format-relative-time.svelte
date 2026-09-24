<script lang="ts">
import type { FormatRelativeTimeProps } from "@ark-ui/svelte/format";
import { Format as FormatPrimitive } from "@ark-ui/svelte/format";

let props: FormatRelativeTimeProps = $props();
</script>

<FormatPrimitive.RelativeTime {...props} />
