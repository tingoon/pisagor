<script lang="ts">
import {
  type RadioGroupLabelProps,
  RadioGroup as RadioGroupPrimitive,
} from "@ark-ui/svelte/radio-group";

let { children, ...rest }: RadioGroupLabelProps = $props();
</script>

<RadioGroupPrimitive.Label {...rest}>
  {@render children?.()}
</RadioGroupPrimitive.Label>
