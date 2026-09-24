<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { type StatTrendVariantProps, statTrendRecipe } from "@pisagor/recipes/stat";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  StatTrendVariantProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
    recipe?: typeof statTrendRecipe;
  };

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
