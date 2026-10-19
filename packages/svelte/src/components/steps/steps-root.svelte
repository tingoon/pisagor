<script lang="ts">
  import { Steps as StepsPrimitive, type StepsRootProps } from "@ark-ui/svelte";
  import type { StepsRootContract } from "@pisagor/contracts";
  import { withStepsProvider } from "./steps.context";

  type Props = StepsRootProps & StepsRootContract;

  let { children, ...rest }: Props = $props();
  const root = withStepsProvider(() => rest, { name: "Root" });
</script>

<StepsPrimitive.Root {...root.props}>
  {@render children?.()}
</StepsPrimitive.Root>
