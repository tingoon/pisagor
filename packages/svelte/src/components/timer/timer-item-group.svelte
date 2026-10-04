<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { TimerItemGroupProps as BaseTimerItemGroupProps } from "@pisagor/props";
import { timerItemGroupRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setTimerItemGroupContext } from "./timer.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  {
  class?: string | undefined;
  orientation?: "horizontal" | "vertical";
  } & BaseTimerItemGroupProps;

let {
  orientation = "vertical",
  children,
  recipe = timerItemGroupRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setTimerItemGroupContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-orientation={orientation}
  data-part="item-group"
  data-scope="timer"
>
  {@render children?.()}
</Ark>
