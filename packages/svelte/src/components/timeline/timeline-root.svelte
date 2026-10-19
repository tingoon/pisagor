<script lang="ts">
  import type { TimelineRootContract } from "@pisagor/contracts";
  import { timelineRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLOListElement> &
    Omit<TimelineRootContract, "items">;

  let {
    orientation = "vertical",
    recipe = timelineRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
</script>

<ol
  {...rest}
  class={recipe({ class: cn(className), orientation })}
  data-orientation={orientation}
  data-part="root"
  data-scope="timeline"
>
  {@render children?.()}
</ol>
