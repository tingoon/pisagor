<script lang="ts">
  import { Timer as TimerPrimitive, type TimerItemProps } from "@ark-ui/svelte";
  import { timerItemGroupRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { TimerItemGroupStylesContext } from "./timer.context";

  // Usable inside or outside `Timer.ItemGroup` (falls back to the default item-group recipe).
  let { class: className, ...rest }: TimerItemProps = $props();
  const styles = TimerItemGroupStylesContext.get();
  const slots = $derived(styles?.slots ?? timerItemGroupRecipe());
</script>

<TimerPrimitive.Item
  data-part="item"
  data-scope="timer"
  {...rest}
  class={slots.item({ class: cn(className) })}
/>
