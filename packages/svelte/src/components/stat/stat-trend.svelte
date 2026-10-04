<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { StatTrendProps as StatTrendSharedProps } from "@pisagor/props";
import { statTrendRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  {
    children?: import("svelte").Snippet;
    class?: string | undefined;
  } & StatTrendSharedProps;

let {
  trend = "neutral",
  recipe = statTrendRecipe,
  children,
  class: className,
  ...rest
}: Props = $props();
</script>

<Ark
  as="div"
  {...rest}
  class={recipe({ class: cn(className), trend })}
  data-part="trend"
  data-scope="stat"
  data-trend={trend}
>
  {@render children?.()}
</Ark>
