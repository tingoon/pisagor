<script lang="ts">
  import {
    Timer as TimerPrimitive,
    type TimerSeparatorProps,
  } from "@ark-ui/svelte";
  import { withTimerContext } from "./timer.context";

  let { children, ...rest }: TimerSeparatorProps = $props();
  const part = withTimerContext(() => rest, { name: "Separator" });
</script>

<TimerPrimitive.Separator {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    :
  {/if}
</TimerPrimitive.Separator>
