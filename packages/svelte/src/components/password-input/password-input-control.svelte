<script lang="ts">
  import {
    PasswordInput as PasswordInputPrimitive,
    type PasswordInputControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./password-input.context";

  let { children, ...rest }: PasswordInputControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<PasswordInputPrimitive.Control {...part.props}>
  {@render children?.()}
</PasswordInputPrimitive.Control>
