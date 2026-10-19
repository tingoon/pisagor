<script lang="ts">
  import {
    RadioGroup as RadioGroupPrimitive,
    type RadioGroupItemHiddenInputProps,
  } from "@ark-ui/svelte";

  let { ...rest }: RadioGroupItemHiddenInputProps = $props();
</script>

<RadioGroupPrimitive.ItemHiddenInput {...rest} />
