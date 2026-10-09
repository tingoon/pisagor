<script lang="ts">
import {
  type TimerItemProps,
  Timer as TimerPrimitive,
} from "@ark-ui/svelte/timer";
import { withTimerItemGroupContext } from "./timer.context";

let { ...rest }: TimerItemProps = $props();
const part = withTimerItemGroupContext(() => rest, { name: "Item" });
</script>

<TimerPrimitive.Item {...part.props} />
