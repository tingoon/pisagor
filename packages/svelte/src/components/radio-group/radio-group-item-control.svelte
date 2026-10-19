<script lang="ts">
  import {
    RadioGroup as RadioGroupPrimitive,
    type RadioGroupItemControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./radio-group.context";

  let { children, ...rest }: RadioGroupItemControlProps = $props();
  const part = withContext(() => rest, {
    name: "ItemControl",
    slot: "control",
  });
</script>

<RadioGroupPrimitive.ItemControl {...part.props}>
  {@render children?.()}
</RadioGroupPrimitive.ItemControl>
