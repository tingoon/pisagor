<script lang="ts">
import type { AlertProps as BaseAlertProps } from "@pisagor/props";
import type { AlertRecipeSlot } from "@pisagor/recipes";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import AlertAction from "./alert-action.svelte";
import AlertDescription from "./alert-description.svelte";
import AlertRoot from "./alert-root.svelte";
import AlertTitle from "./alert-title.svelte";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "title" | "children"> & {
  action?: string | Snippet;
  classNames?: Partial<Record<AlertRecipeSlot, string>>;
  description?: string | Snippet;
  icon?: Snippet;
  title?: string | Snippet;
} & BaseAlertProps;

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
