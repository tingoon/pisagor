<script lang="ts">
import {
  type TimerControlProps,
  Timer as TimerPrimitive,
} from "@ark-ui/svelte/timer";
import { withTimerContext } from "./timer.context";

let { children, ...rest }: TimerControlProps = $props();
const part = withTimerContext(() => rest, { name: "Control" });
</script>

<TimerPrimitive.Control {...part.props}>
  {@render children?.()}
</TimerPrimitive.Control>
