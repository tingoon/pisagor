<script lang="ts">
import { type ToastOptions, Toast as ToastPrimitive } from "@ark-ui/svelte/toast";

type Accessor<T> = () => T;

import { buttonRecipe } from "@pisagor/recipes/button";
import { type ToastItemRecipeSlot, toastItemRecipe } from "@pisagor/recipes/toast";
import { cn } from "@pisagor/utils";
import CheckCircleIcon from "phosphor-svelte/lib/CheckCircleIcon";
import InfoIcon from "phosphor-svelte/lib/InfoIcon";
import WarningCircleIcon from "phosphor-svelte/lib/WarningCircleIcon";
import WarningIcon from "phosphor-svelte/lib/WarningIcon";
import XIcon from "phosphor-svelte/lib/XIcon";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import Spinner from "../spinner/spinner.svelte";
import { setToastItemContext } from "./toast.context";

type Props = Omit<import("@ark-ui/svelte/toast").ToastRootProps, "class"> & {
  actionTriggerProps?: Omit<
    import("@ark-ui/svelte/toast").ToastActionTriggerProps,
    "children" | "class"
  >;
  actionsProps?: Omit<HTMLAttributes<HTMLDivElement>, "class">;
  class?: string | undefined;
  classNames?: Partial<Record<ToastItemRecipeSlot, string>>;
  closeTriggerProps?: Omit<
    import("@ark-ui/svelte/toast").ToastCloseTriggerProps,
    "children" | "class"
  >;
  descriptionProps?: Omit<
    import("@ark-ui/svelte/toast").ToastDescriptionProps,
    "children" | "class"
  >;
  iconProps?: Omit<HTMLAttributes<HTMLDivElement>, "class">;
  itemRecipe?: typeof toastItemRecipe;
  titleProps?: Omit<import("@ark-ui/svelte/toast").ToastTitleProps, "children" | "class">;
  toast: Accessor<ToastOptions>;
};

let {
  actionsProps,
  actionTriggerProps,
  closeTriggerProps,
  descriptionProps,
  iconProps,
  titleProps,
  toast: toastAccessor,
  class: className,
  classNames,
  itemRecipe = toastItemRecipe,
  ...rest
}: Props = $props();

const slots = $derived(itemRecipe());
setToastItemContext({
  get slots() {
    return slots;
  },
});

const toastData = $derived(toastAccessor());
const toastType = $derived(toastData.type);
const isExplicitClosable = $derived(toastData.closable === false);

function renderMaybeSnippet(value: unknown): value is Snippet {
  return typeof value === "function";
}
</script>

<ToastPrimitive.Root {...rest} class={slots.base({ class: cn(className) })}>
  <div class={slots.content({ class: cn(classNames?.content) })}>
    <div
      {...iconProps}
      class={slots.icon({ class: cn(classNames?.icon) })}
      data-part="icon"
      data-scope="toast"
    >
      {#if toastType === "error"}
        <WarningCircleIcon />
      {:else if toastType === "info"}
        <InfoIcon />
      {:else if toastType === "loading"}
        <Spinner />
      {:else if toastType === "success"}
        <CheckCircleIcon />
      {:else if toastType === "warning"}
        <WarningIcon />
      {/if}
    </div>

    <div class={slots.body({ class: cn(classNames?.body) })}>
      <ToastPrimitive.Title {...titleProps} class={slots.title({ class: cn(classNames?.title) })}>
        {#if renderMaybeSnippet(toastData.title)}
          {@render toastData.title()}
        {:else if toastData.title}
          {toastData.title}
        {/if}
      </ToastPrimitive.Title>

      {#if toastData.description}
        <ToastPrimitive.Description
          {...descriptionProps}
          class={slots.description({ class: cn(classNames?.description) })}
        >
          {#if renderMaybeSnippet(toastData.description)}
            {@render toastData.description()}
          {:else}
            {toastData.description}
          {/if}
        </ToastPrimitive.Description>
      {/if}
    </div>
  </div>

  <div {...actionsProps} class={slots.actions({ class: cn(classNames?.actions) })}>
    {#if toastData.action}
      <ToastPrimitive.ActionTrigger
        {...actionTriggerProps}
        class={buttonRecipe({ size: "sm", variant: "secondary" }).base()}
        onclick={toastData.action.onClick}
        type="button"
      >
        {toastData.action.label}
      </ToastPrimitive.ActionTrigger>
    {/if}

    {#if !isExplicitClosable}
      <ToastPrimitive.CloseTrigger
        {...closeTriggerProps}
        aria-label="Close"
        class={cn(
  buttonRecipe({ size: "icon-xs", variant: "ghost" }).base(),
  slots.close({ class: cn(classNames?.close) }),
)}
        type="button"
      >
        <XIcon />
      </ToastPrimitive.CloseTrigger>
    {/if}
  </div>
</ToastPrimitive.Root>
