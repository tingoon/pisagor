<script lang="ts">
import {
  type FormatByteProps,
  Format as FormatPrimitive,
} from "@ark-ui/svelte/format";

let props: FormatByteProps = $props();
</script>

<FormatPrimitive.Byte {...props} />
