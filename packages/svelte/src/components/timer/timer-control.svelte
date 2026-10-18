<script lang="ts">
  import {
    Timer as TimerPrimitive,
    type TimerControlProps,
  } from "@ark-ui/svelte";
  import { withTimerContext } from "./timer.context";

  let { children, ...rest }: TimerControlProps = $props();
  const part = withTimerContext(() => rest, { name: "Control" });
</script>

<TimerPrimitive.Control {...part.props}>
  {@render children?.()}
</TimerPrimitive.Control>
