<script lang="ts">
import type { EmptyStateRecipeSlot } from "@pisagor/recipes/empty-state";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import EmptyStateActions from "./empty-state-actions.svelte";
import EmptyStateDescription from "./empty-state-description.svelte";
import EmptyStateMedia from "./empty-state-media.svelte";
import EmptyStateRoot from "./empty-state-root.svelte";
import EmptyStateTitle from "./empty-state-title.svelte";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "title" | "children"> & {
  actions?: string | Snippet;
  class?: string | undefined;
  classNames?: Partial<Record<EmptyStateRecipeSlot, string>>;
  description?: string | Snippet;
  media?: Snippet;
  recipe?: import("@pisagor/recipes/empty-state").EmptyStateRecipeFn;
  title?: string | Snippet;
};

let {
  actions,
  description,
  media,
  title,
  class: className,
  classNames,
  recipe,
  ...rest
}: Props = $props();
</script>

<EmptyStateRoot {...rest} class={className} {recipe}>
  {#if media !== undefined}
    <EmptyStateMedia class={classNames?.media}> {@render media()} </EmptyStateMedia>
  {/if}

  {#if title !== undefined}
    <EmptyStateTitle class={classNames?.title}>
      {#if typeof title === "string"}
        {title}
      {:else}
        {@render title()}
      {/if}
    </EmptyStateTitle>
  {/if}

  {#if description !== undefined}
    <EmptyStateDescription class={classNames?.description}>
      {#if typeof description === "string"}
        {description}
      {:else}
        {@render description()}
      {/if}
    </EmptyStateDescription>
  {/if}

  {#if actions !== undefined}
    <EmptyStateActions class={classNames?.actions}>
      {#if typeof actions === "string"}
        {actions}
      {:else}
        {@render actions()}
      {/if}
    </EmptyStateActions>
  {/if}
</EmptyStateRoot>
