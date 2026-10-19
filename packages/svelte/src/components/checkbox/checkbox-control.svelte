<script lang="ts">
  import {
    Checkbox as CheckboxPrimitive,
    type CheckboxControlProps,
  } from "@ark-ui/svelte";
  import type { CheckboxRootContract } from "@pisagor/contracts";
  import { CheckIcon, MinusIcon } from "phosphor-svelte";

  import { withContext } from "./checkbox.context";
  import CheckboxIndicator from "./checkbox-indicator.svelte";

  type Props = CheckboxControlProps &
    Pick<CheckboxRootContract, "size" | "variant">;

  let { children, ...rest }: Props = $props();

  const part = withContext(
    () => ({
      ...rest,
      "data-variant": rest.variant ?? "primary",
    }),
    { name: "Control", slot: "base" },
  );
</script>

<CheckboxPrimitive.Control {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    <CheckboxIndicator>
      <CheckIcon />
    </CheckboxIndicator>
    <CheckboxIndicator indeterminate>
      <MinusIcon />
    </CheckboxIndicator>
  {/if}
</CheckboxPrimitive.Control>
