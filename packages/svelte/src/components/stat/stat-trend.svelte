<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { StatTrendProps as BaseStatTrendProps } from "@pisagor/props";
import { statTrendRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
} & BaseStatTrendProps;

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
