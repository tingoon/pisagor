<script lang="ts">
  import {
    PasswordInput as PasswordInputPrimitive,
    type PasswordInputRootProps,
  } from "@ark-ui/svelte";
  import type { PasswordInputRootContract } from "@pisagor/contracts";
  import { withProvider } from "./password-input.context";

  type Props = PasswordInputRootProps & {
    /** Style recipe override. */
    recipe?: PasswordInputRootContract["recipe"];
  };

  let { children, visible = $bindable(), ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<PasswordInputPrimitive.Root {...root.props} bind:visible>
  {@render children?.()}
</PasswordInputPrimitive.Root>
