<script lang="ts">
import {
  type ToastActionTriggerProps,
  type ToastCloseTriggerProps,
  type ToastDescriptionProps,
  type ToastOptions,
  Toast as ToastPrimitive,
  type ToastTitleProps,
} from "@ark-ui/svelte/toast";
import type { ToastItemRecipeSlot } from "@pisagor/recipes";
import CheckCircleIcon from "phosphor-svelte/lib/CheckCircleIcon";
import InfoIcon from "phosphor-svelte/lib/InfoIcon";
import WarningCircleIcon from "phosphor-svelte/lib/WarningCircleIcon";
import WarningIcon from "phosphor-svelte/lib/WarningIcon";
import XIcon from "phosphor-svelte/lib/XIcon";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { VariantClassNames } from "../../internal/types";
import Button from "../button.svelte";
import Spinner from "../spinner.svelte";
import { useToastItem } from "./toast.context";

type Props = {
  actionsProps?: Omit<HTMLAttributes<HTMLDivElement>, "class">;
  actionTriggerProps?: Omit<
    ToastActionTriggerProps,
    "asChild" | "children" | "class" | "onclick"
  >;
  classNames?: VariantClassNames<ToastItemRecipeSlot>;
  closeTriggerProps?: Omit<
    ToastCloseTriggerProps,
    "asChild" | "children" | "class"
  >;
  descriptionProps?: Omit<ToastDescriptionProps, "children" | "class">;
  iconProps?: Omit<HTMLAttributes<HTMLDivElement>, "class">;
  titleProps?: Omit<ToastTitleProps, "children" | "class">;
  toast: ToastOptions;
};

let {
  actionsProps,
  actionTriggerProps,
  closeTriggerProps,
  descriptionProps,
  iconProps,
  titleProps,
  toast: toastData,
  classNames,
}: Props = $props();

const styles = useToastItem();
const slots = $derived(styles.slots);
const isExplicitClosable = $derived(toastData.closable === false);

function isSnippet(value: unknown): value is Snippet {
  return typeof value === "function";
}
</script>

<div class={slots.content({ class: classNames?.content })}>
  <div
    {...iconProps}
    class={slots.icon({ class: classNames?.icon })}
    data-part="icon"
    data-scope="toast"
  >
    {#if toastData.type === "error"}
      <WarningCircleIcon />
    {:else if toastData.type === "info"}
      <InfoIcon />
    {:else if toastData.type === "loading"}
      <Spinner />
    {:else if toastData.type === "success"}
      <CheckCircleIcon />
    {:else if toastData.type === "warning"}
      <WarningIcon />
    {/if}
  </div>

  <div class={slots.body({ class: classNames?.body })}>
    <ToastPrimitive.Title
      {...titleProps}
      class={slots.title({ class: classNames?.title })}
    >
      {#if isSnippet(toastData.title)}
        {@render toastData.title()}
      {:else if toastData.title}
        {toastData.title}
      {/if}
    </ToastPrimitive.Title>

    {#if toastData.description}
      <ToastPrimitive.Description
        {...descriptionProps}
        class={slots.description({ class: classNames?.description })}
      >
        {#if isSnippet(toastData.description)}
          {@render toastData.description()}
        {:else}
          {toastData.description}
        {/if}
      </ToastPrimitive.Description>
    {/if}
  </div>
</div>

<div {...actionsProps} class={slots.actions({ class: classNames?.actions })}>
  {#if toastData.action}
    <ToastPrimitive.ActionTrigger
      {...actionTriggerProps}
      onclick={toastData.action.onClick}
    >
      {#snippet asChild(
        props,
      )}
        <Button {...props()} size="sm" variant="secondary">
          {toastData.action?.label}
        </Button>
      {/snippet}
    </ToastPrimitive.ActionTrigger>
  {/if}

  {#if !isExplicitClosable}
    <ToastPrimitive.CloseTrigger {...closeTriggerProps}>
      {#snippet asChild(
        props,
      )}
        <Button
          {...props({ class: slots.close({ class: classNames?.close }) })}
          aria-label="Close"
          size="icon-xs"
          variant="ghost"
        >
          <XIcon />
        </Button>
      {/snippet}
    </ToastPrimitive.CloseTrigger>
  {/if}
</div>
