<script lang="ts">
import type { StepsCompletedContentProps } from "@ark-ui/svelte/steps";
import { Steps as StepsPrimitive } from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import { useSteps } from "./steps.context";

type Props = Omit<StepsCompletedContentProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useSteps();
</script>

<StepsPrimitive.CompletedContent {...rest} class={slots.completedContent({ class: cn(className) })}>
  {@render children?.()}
</StepsPrimitive.CompletedContent>
