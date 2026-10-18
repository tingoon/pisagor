<script lang="ts">
  import { Steps as StepsPrimitive, type StepsItemProps } from "@ark-ui/svelte";
  import type { StepsItemRootContract } from "@pisagor/props";
  import { withStepsItemProvider } from "./steps.context";

  type Props = StepsItemProps & StepsItemRootContract;

  let { children, ...rest }: Props = $props();
  const root = withStepsItemProvider(() => rest, {
    name: "Item",
    slot: "base",
  });
</script>

<StepsPrimitive.Item {...root.props}>
  {@render children?.()}
</StepsPrimitive.Item>
