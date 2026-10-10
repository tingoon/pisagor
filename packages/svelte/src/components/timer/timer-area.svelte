<script lang="ts">
import {
  type TimerAreaProps,
  Timer as TimerPrimitive,
} from "@ark-ui/svelte/timer";
import { withTimerContext } from "./timer.context";

let { children, ...rest }: TimerAreaProps = $props();
const part = withTimerContext(() => rest, { name: "Area" });
</script>

<TimerPrimitive.Area {...part.props}>
  {@render children?.()}
</TimerPrimitive.Area>
