<script lang="ts">
  import {
    Steps as StepsPrimitive,
    type StepsContentProps,
  } from "@ark-ui/svelte";
  import { withStepsContext } from "./steps.context";

  let { children, ...rest }: StepsContentProps = $props();
  const part = withStepsContext(() => rest, { name: "Content" });
</script>

<StepsPrimitive.Content {...part.props}>
  {@render children?.()}
</StepsPrimitive.Content>
