<script lang="ts">
  import {
    PasswordInput as PasswordInputPrimitive,
    type PasswordInputInputProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./password-input.context";

  let { ...rest }: PasswordInputInputProps = $props();
  const part = withContext(() => rest, { name: "Input" });
</script>

<PasswordInputPrimitive.Input {...part.props} />
