<script lang="ts">
import type { StatRecipeSlot, StatVariantProps } from "@pisagor/recipes/stat";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import StatDescription from "./stat-description.svelte";
import StatLabel from "./stat-label.svelte";
import StatRoot from "./stat-root.svelte";
import StatTrend from "./stat-trend.svelte";
import StatValue from "./stat-value.svelte";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "children"> &
  StatVariantProps & {
    class?: string | undefined;
    classNames?: Partial<Record<StatRecipeSlot, string>>;
    description?: string | Snippet;
    label?: string | Snippet;
    recipe?: typeof import("@pisagor/recipes/stat").statRecipe;
    trend?: string | Snippet;
    value?: string | Snippet;
  };

let {
  variant,
  value,
  description,
  label,
  trend,
  class: className,
  classNames,
  recipe,
  ...rest
}: Props = $props();
</script>

<StatRoot {...rest} class={className} {recipe} {variant}>
  {#if label !== undefined}
    <StatLabel class={classNames?.label}>
      {#if typeof label === "string"}
        {label}
      {:else}
        {@render label()}
      {/if}
    </StatLabel>
  {/if}

  {#if value !== undefined}
    <StatValue class={classNames?.value}>
      {#if typeof value === "string"}
        {value}
      {:else}
        {@render value()}
      {/if}
    </StatValue>
  {/if}

  {#if description !== undefined}
    <StatDescription class={classNames?.description}>
      {#if typeof description === "string"}
        {description}
      {:else}
        {@render description()}
      {/if}
    </StatDescription>
  {/if}

  {#if trend !== undefined}
    <StatTrend>
      {#if typeof trend === "string"}
        {trend}
      {:else}
        {@render trend()}
      {/if}
    </StatTrend>
  {/if}
</StatRoot>
