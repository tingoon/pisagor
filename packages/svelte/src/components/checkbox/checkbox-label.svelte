<script lang="ts">
  import {
    Checkbox as CheckboxPrimitive,
    type CheckboxLabelProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./checkbox.context";

  let { children, ...rest }: CheckboxLabelProps = $props();
  const part = withContext(() => rest, { name: "Label" });
</script>

<CheckboxPrimitive.Label {...part.props}>
  {@render children?.()}
</CheckboxPrimitive.Label>
