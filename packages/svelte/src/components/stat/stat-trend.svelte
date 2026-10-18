<script lang="ts">
  import type { StatTrendProps as BaseStatTrendProps } from "@pisagor/props";
  import { statTrendRecipe } from "@pisagor/recipes";
  import type { MessageKey } from "@pisagor/utils";
  import { cn } from "@pisagor/utils";
  import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from "phosphor-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
    /**
     * Icon shown before the content. Defaults to an arrow matching `trend`;
     * pass `null` to hide it.
     */
    icon?: import("svelte").Snippet | null;
  } & BaseStatTrendProps;

  let {
    trend = "neutral",
    recipe = statTrendRecipe,
    children,
    icon,
    class: className,
    ...rest
  }: Props = $props();
  const { m } = useLocale();
</script>

<div
  {...rest}
  class={recipe({ class: cn(className), trend })}
  data-part="trend"
  data-scope="stat"
  data-trend={trend}
>
  {#if icon === undefined}
    {#if trend === "up"}
      <ArrowUpIcon aria-hidden="true" />
    {:else if trend === "down"}
      <ArrowDownIcon aria-hidden="true" />
    {:else}
      <MinusIcon aria-hidden="true" />
    {/if}
  {:else if icon}
    {@render icon()}
  {/if}
  <span class="sr-only">{m(`stat.trend.${trend}` as MessageKey)}</span>
  {@render children?.()}
</div>
