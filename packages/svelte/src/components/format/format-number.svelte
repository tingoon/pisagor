<script lang="ts">
  import {
    Format as FormatPrimitive,
    type FormatNumberProps,
  } from "@ark-ui/svelte";

  let props: FormatNumberProps = $props();
</script>

<FormatPrimitive.Number {...props} />
