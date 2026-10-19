<script lang="ts">
  import {
    PasswordInput as PasswordInputPrimitive,
    type PasswordInputLabelProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./password-input.context";

  let { children, ...rest }: PasswordInputLabelProps = $props();
  const part = withContext(() => rest, { name: "Label" });
</script>

<PasswordInputPrimitive.Label {...part.props}>
  {@render children?.()}
</PasswordInputPrimitive.Label>
