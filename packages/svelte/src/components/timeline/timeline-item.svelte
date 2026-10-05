<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { TimelineItemProps as BaseTimelineItemProps } from "@pisagor/props";
import { timelineItemRecipe } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";
import { setTimelineItemContext } from "./timeline.context";

type Props = Omit<HTMLAttributes<HTMLLIElement>, "class"> & {
  class?: string | undefined;
} & BaseTimelineItemProps;

let {
  children,
  recipe = timelineItemRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setTimelineItemContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="li"
  {...rest}
  class={slots.base({ class: className })}
  data-part="item"
  data-scope="timeline"
>
  {@render children?.()}
</Ark>
