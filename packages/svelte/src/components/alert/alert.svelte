<script lang="ts">
import type { AlertRecipeSlot, AlertVariantProps } from "@pisagor/recipes/alert";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import AlertAction from "./alert-action.svelte";
import AlertDescription from "./alert-description.svelte";
import AlertRoot from "./alert-root.svelte";
import AlertTitle from "./alert-title.svelte";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "title" | "children"> &
  AlertVariantProps & {
    action?: string | Snippet;
    class?: string | undefined;
    classNames?: Partial<Record<AlertRecipeSlot, string>>;
    description?: string | Snippet;
    icon?: Snippet;
    recipe?: import("@pisagor/recipes/alert").AlertRecipeFn;
    title?: string | Snippet;
  };

let {
  variant,
  action,
  description,
  icon,
  title,
  class: className,
  classNames,
  recipe,
  ...rest
}: Props = $props();
</script>

<AlertRoot {...rest} class={className} {recipe} {variant}>
  {#if icon}
    {@render icon()}
  {/if}

  {#if title !== undefined}
    <AlertTitle class={classNames?.title}>
      {#if typeof title === "string"}
        {title}
      {:else}
        {@render title()}
      {/if}
    </AlertTitle>
  {/if}

  {#if description !== undefined}
    <AlertDescription class={classNames?.description}>
      {#if typeof description === "string"}
        {description}
      {:else}
        {@render description()}
      {/if}
    </AlertDescription>
  {/if}

  {#if action !== undefined}
    <AlertAction class={classNames?.action}>
      {#if typeof action === "string"}
        {action}
      {:else}
        {@render action()}
      {/if}
    </AlertAction>
  {/if}
</AlertRoot>
