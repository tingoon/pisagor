<script lang="ts">
  import {
    Format as FormatPrimitive,
    type FormatByteProps,
  } from "@ark-ui/svelte";

  let props: FormatByteProps = $props();
</script>

<FormatPrimitive.Byte {...props} />
