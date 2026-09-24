<script lang="ts">
import type { StepsSeparatorProps } from "@ark-ui/svelte/steps";
import { Steps as StepsPrimitive } from "@ark-ui/svelte/steps";
import { cn } from "@pisagor/utils";
import { useStepsItem } from "./steps.context";

type Props = Omit<StepsSeparatorProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const { slots } = useStepsItem();
</script>

<StepsPrimitive.Separator {...rest} class={slots.separator({ class: cn(className) })} />
