<script lang="ts">
  import { Steps as StepsPrimitive, type StepsListProps } from "@ark-ui/svelte";
  import { withStepsContext } from "./steps.context";

  let { children, ...rest }: StepsListProps = $props();
  const part = withStepsContext(() => rest, { name: "List" });
</script>

<StepsPrimitive.List {...part.props}>
  {@render children?.()}
</StepsPrimitive.List>
