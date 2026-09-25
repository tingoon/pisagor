<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { timerItemGroupRecipe } from "@pisagor/recipes/timer";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setTimerItemGroupContext } from "./timer.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
  itemGroupRecipe?: typeof timerItemGroupRecipe;
  orientation?: "horizontal" | "vertical";
};

let {
  orientation = "vertical",
  children,
  itemGroupRecipe = timerItemGroupRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(itemGroupRecipe());
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
