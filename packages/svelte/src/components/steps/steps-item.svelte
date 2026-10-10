<script lang="ts">
import {
  type StepsItemProps,
  Steps as StepsPrimitive,
} from "@ark-ui/svelte/steps";
import type { StepsItemProps as BaseStepsItemProps } from "@pisagor/props";
import { withStepsItemProvider } from "./steps.context";

type Props = StepsItemProps & BaseStepsItemProps;

let { children, ...rest }: Props = $props();
const root = withStepsItemProvider(() => rest, { name: "Item", slot: "base" });
</script>

<StepsPrimitive.Item {...root.props}>
  {@render children?.()}
</StepsPrimitive.Item>
