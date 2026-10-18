<script lang="ts">
  import type { AlertProps as BaseAlertProps } from "@pisagor/props";
  import type { AlertRecipeSlot } from "@pisagor/recipes";
  import {
    CheckCircleIcon,
    InfoIcon,
    WarningCircleIcon,
    WarningIcon,
  } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import type { VariantClassNames } from "../../internal/types";
  import AlertAction from "./alert-action.svelte";
  import AlertDescription from "./alert-description.svelte";
  import AlertRoot from "./alert-root.svelte";
  import AlertTitle from "./alert-title.svelte";

  type Props = Omit<HTMLAttributes<HTMLDivElement>, "title" | "children"> & {
    action?: string | Snippet;
    classNames?: VariantClassNames<AlertRecipeSlot>;
    description?: string | Snippet;
    /** Leading icon. Status variants get a default icon; pass `null` to hide it. */
    icon?: Snippet | null;
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
  {:else if icon === undefined}
    {#if variant === "destructive"}
      <WarningCircleIcon />
    {:else if variant === "info"}
      <InfoIcon />
    {:else if variant === "success"}
      <CheckCircleIcon />
    {:else if variant === "warning"}
      <WarningIcon />
    {/if}
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
