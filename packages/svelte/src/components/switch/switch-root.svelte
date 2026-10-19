<script lang="ts">
  import {
    Switch as SwitchPrimitive,
    type SwitchRootProps,
  } from "@ark-ui/svelte";
  import type { SwitchRootContract } from "@pisagor/contracts";

  import { withProvider } from "./switch.context";

  type Props = SwitchRootProps & SwitchRootContract;

  let { children, ...rest }: Props = $props();

  const root = withProvider(() => rest, { name: "Root" });
</script>

<SwitchPrimitive.Root {...root.props}>
  {@render children?.()}
</SwitchPrimitive.Root>
