<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { TimelineProps as BaseTimelineProps } from "@pisagor/props";
import { timelineRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLOListElement>, "class"> & {
  class?: string | undefined;
} & BaseTimelineProps;

let {
  orientation = "vertical",
  recipe = timelineRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
</script>

<Ark
  as="ol"
  {...rest}
  class={recipe({ class: cn(className), orientation })}
  data-orientation={orientation}
  data-part="root"
  data-scope="timeline"
>
  {@render children?.()}
</Ark>
