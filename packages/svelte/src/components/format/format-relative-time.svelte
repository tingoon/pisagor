<script lang="ts">
import {
  Format as FormatPrimitive,
  type FormatRelativeTimeProps,
} from "@ark-ui/svelte/format";

let props: FormatRelativeTimeProps = $props();
</script>

<FormatPrimitive.RelativeTime {...props} />
