<script lang="ts">
  import {
    Steps as StepsPrimitive,
    type StepsCompletedContentProps,
  } from "@ark-ui/svelte";
  import { withStepsContext } from "./steps.context";

  let { children, ...rest }: StepsCompletedContentProps = $props();
  const part = withStepsContext(() => rest, { name: "CompletedContent" });
</script>

<StepsPrimitive.CompletedContent {...part.props}>
  {@render children?.()}
</StepsPrimitive.CompletedContent>
