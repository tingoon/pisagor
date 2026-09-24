<script lang="ts">
import type { RadioGroupLabelProps } from "@ark-ui/svelte/radio-group";
import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/svelte/radio-group";

type Props = RadioGroupLabelProps;

let { children, ...rest }: Props = $props();
</script>

<RadioGroupPrimitive.Label {...rest}> {@render children?.()} </RadioGroupPrimitive.Label>
