<script lang="ts">
  import {
    Steps as StepsPrimitive,
    type StepsNextTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: StepsNextTriggerProps = $props();
</script>

<StepsPrimitive.NextTrigger {...rest}>
  {@render children?.()}
</StepsPrimitive.NextTrigger>
