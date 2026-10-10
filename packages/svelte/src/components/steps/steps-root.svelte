<script lang="ts">
import {
  Steps as StepsPrimitive,
  type StepsRootProps,
} from "@ark-ui/svelte/steps";
import type { StepsProps as BaseStepsProps } from "@pisagor/props";
import { withStepsProvider } from "./steps.context";

type Props = StepsRootProps & BaseStepsProps;

let { children, ...rest }: Props = $props();
const root = withStepsProvider(() => rest, { name: "Root", slot: "base" });
</script>

<StepsPrimitive.Root {...root.props}>
  {@render children?.()}
</StepsPrimitive.Root>
