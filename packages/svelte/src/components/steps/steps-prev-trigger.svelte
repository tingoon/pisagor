<script lang="ts">
  import {
    Steps as StepsPrimitive,
    type StepsPrevTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: StepsPrevTriggerProps = $props();
</script>

<StepsPrimitive.PrevTrigger {...rest}>
  {@render children?.()}
</StepsPrimitive.PrevTrigger>
