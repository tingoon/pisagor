<script lang="ts">
  import {
    PasswordInput as PasswordInputPrimitive,
    type PasswordInputIndicatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./password-input.context";

  let { children, ...rest }: PasswordInputIndicatorProps = $props();
  const part = withContext(() => rest, { name: "Indicator" });
</script>

<PasswordInputPrimitive.Indicator {...part.props}>
  {@render children?.()}
</PasswordInputPrimitive.Indicator>
