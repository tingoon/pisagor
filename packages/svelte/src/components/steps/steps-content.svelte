<script lang="ts">
import type { StepsContentProps } from "@ark-ui/svelte/steps";
import { Steps as StepsPrimitive } from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import { useSteps } from "./steps.context";

type Props = Omit<StepsContentProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useSteps();
</script>

<StepsPrimitive.Content {...rest} class={slots.content({ class: cn(className) })}>
  {@render children?.()}
</StepsPrimitive.Content>
