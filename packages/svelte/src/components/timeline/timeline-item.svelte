<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { timelineItemRecipe } from "@pisagor/recipes/timeline";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setTimelineItemContext } from "./timeline.context";

type Props = Omit<HTMLAttributes<HTMLLIElement>, "class"> & {
  class?: string | undefined;
  itemRecipe?: typeof timelineItemRecipe;
};

let { children, itemRecipe = timelineItemRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(itemRecipe());
setTimelineItemContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="li"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-part="item"
  data-scope="timeline"
>
  {@render children?.()}
</Ark>
