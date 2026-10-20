<script lang="ts">
  import {
    Timer as TimerPrimitive,
    type TimerRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { TimerRootContract } from "@pisagor/contracts";
  import { withTimerProvider } from "./timer.context";

  type Props = ArkRootProps & TimerRootContract;

  let { children, ...rest }: Props = $props();
  const root = withTimerProvider(() => rest, { name: "Root" });
</script>

<TimerPrimitive.Root {...root.props}>
  {@render children?.()}
</TimerPrimitive.Root>
