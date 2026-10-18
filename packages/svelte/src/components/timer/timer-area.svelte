<script lang="ts">
  import { Timer as TimerPrimitive, type TimerAreaProps } from "@ark-ui/svelte";
  import { withTimerContext } from "./timer.context";

  let { children, ...rest }: TimerAreaProps = $props();
  const part = withTimerContext(() => rest, { name: "Area" });
</script>

<TimerPrimitive.Area {...part.props}>
  {@render children?.()}
</TimerPrimitive.Area>
