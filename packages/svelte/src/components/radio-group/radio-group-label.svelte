<script lang="ts">
  import {
    RadioGroup as RadioGroupPrimitive,
    type RadioGroupLabelProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: RadioGroupLabelProps = $props();
</script>

<RadioGroupPrimitive.Label {...rest}>
  {@render children?.()}
</RadioGroupPrimitive.Label>
