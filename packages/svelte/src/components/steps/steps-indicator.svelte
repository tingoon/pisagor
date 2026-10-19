<script lang="ts">
  import {
    Steps as StepsPrimitive,
    type StepsIndicatorProps,
  } from "@ark-ui/svelte";
  import { withStepsItemContext } from "./steps.context";

  let { children, ...rest }: StepsIndicatorProps = $props();
  const part = withStepsItemContext(() => rest, { name: "Indicator" });
</script>

<StepsPrimitive.Indicator {...part.props}>
  {@render children?.()}
</StepsPrimitive.Indicator>
