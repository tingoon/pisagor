<script lang="ts">
  import {
    Switch as SwitchPrimitive,
    type SwitchControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./switch.context";

  let { children, ...rest }: SwitchControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<SwitchPrimitive.Control {...part.props}>
  {@render children?.()}
</SwitchPrimitive.Control>
