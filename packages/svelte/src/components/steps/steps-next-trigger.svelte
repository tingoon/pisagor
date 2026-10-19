<script lang="ts">
  import {
    Steps as StepsPrimitive,
    type StepsNextTriggerProps,
  } from "@ark-ui/svelte";
  import { withStepsContext } from "./steps.context";

  let { children, ...rest }: StepsNextTriggerProps = $props();
  const part = withStepsContext(() => rest, { name: "NextTrigger" });
</script>

<StepsPrimitive.NextTrigger {...part.props}>
  {@render children?.()}
</StepsPrimitive.NextTrigger>
