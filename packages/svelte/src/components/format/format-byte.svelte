<script lang="ts">
import type { FormatByteProps } from "@ark-ui/svelte/format";
import { Format as FormatPrimitive } from "@ark-ui/svelte/format";

let props: FormatByteProps = $props();
</script>

<FormatPrimitive.Byte {...props} />
