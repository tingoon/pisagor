<script lang="ts">
  import {
    Select as SelectPrimitive,
    type SelectValueTextProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./select.context";

  let { children, ...rest }: SelectValueTextProps = $props();
  const part = withContext(() => rest, { name: "ValueText" });
</script>

<SelectPrimitive.ValueText {...part.props}>
  {@render children?.()}
</SelectPrimitive.ValueText>
