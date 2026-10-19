<script lang="ts">
  import {
    Checkbox as CheckboxPrimitive,
    type CheckboxRootProps,
  } from "@ark-ui/svelte";
  import type { CheckboxRootContract } from "@pisagor/contracts";

  import { withProvider } from "./checkbox.context";

  type Props = CheckboxRootProps & CheckboxRootContract;

  let { children, ...rest }: Props = $props();

  const root = withProvider(() => rest, { name: "Root", slot: "root" });
</script>

<CheckboxPrimitive.Root {...root.props}>
  {@render children?.()}
</CheckboxPrimitive.Root>
