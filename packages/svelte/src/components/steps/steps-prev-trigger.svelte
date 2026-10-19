<script lang="ts">
  import {
    Steps as StepsPrimitive,
    type StepsPrevTriggerProps,
  } from "@ark-ui/svelte";
  import { withStepsContext } from "./steps.context";

  let { children, ...rest }: StepsPrevTriggerProps = $props();
  const part = withStepsContext(() => rest, { name: "PrevTrigger" });
</script>

<StepsPrimitive.PrevTrigger {...part.props}>
  {@render children?.()}
</StepsPrimitive.PrevTrigger>
