<script lang="ts">
  import {
    Checkbox as CheckboxPrimitive,
    type CheckboxIndicatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./checkbox.context";

  let { children, ...rest }: CheckboxIndicatorProps = $props();
  const part = withContext(() => rest, { name: "Indicator" });
</script>

<CheckboxPrimitive.Indicator {...part.props}>
  {@render children?.()}
</CheckboxPrimitive.Indicator>
