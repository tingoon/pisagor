<script lang="ts">
import type { ClipboardRootProps } from "@ark-ui/svelte/clipboard";
import { Clipboard as ClipboardPrimitive } from "@ark-ui/svelte/clipboard";
import type { ButtonProps } from "@pisagor/props/button";
import { buttonRecipe } from "@pisagor/recipes/button";
import {
  type ClipboardRecipeSlot,
  type ClipboardVariantProps,
  clipboardRecipe,
} from "@pisagor/recipes/clipboard";
import { formControlShellRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import ClipboardIcon from "phosphor-svelte/lib/ClipboardIcon";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { setClipboardContext } from "./clipboard.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ClipboardRootProps, "class" | "children"> &
  ClipboardVariantProps & {
    buttonAriaLabel?: string;
    buttonSize?: ButtonProps["size"];
    buttonVariant?: ButtonProps["variant"];
    children?: Snippet;
    class?: string | undefined;
    classNames?: Partial<Record<ClipboardRecipeSlot, string>>;
    controlVariant?: FormControlVariant;
    copiedIcon?: Snippet;
    copyIcon?: Snippet;
    label?: string;
    labelProps?: Omit<HTMLAttributes<HTMLSpanElement>, "children" | "class">;
    recipe?: typeof clipboardRecipe;
    variant?: "button" | "input" | "value";
  };

let {
  buttonSize = "icon-md",
  buttonVariant,
  controlVariant: controlVariantProp,
  valueSize = "md",
  variant = "input",
  buttonAriaLabel = "Copy to clipboard",
  copiedIcon,
  copyIcon,
  label,
  labelProps,
  recipe = clipboardRecipe,
  class: className,
  classNames,
  ...rest
}: Props = $props();

const slots = $derived(recipe({ valueSize }));
setClipboardContext({
  get slots() {
    return slots;
  },
});

const surfaceVariant = useFormControlSurface();
const resolvedVariant = $derived(controlVariantProp ?? ("primary" as FormControlVariant));
const shellClassName = $derived(
  formControlShellRecipe({
    size: "md",
    surfaceVariant,
    variant: resolvedVariant,
  }),
);
</script>

{#snippet control()}
  <ClipboardPrimitive.Root {...rest} class={className}>
    <ClipboardPrimitive.Control class={slots.control({ class: cn(classNames?.control) })}>
      {#if variant === "input"}
        <ClipboardPrimitive.Input
          class={cn(shellClassName, classNames?.input, slots.input())}
          data-variant={resolvedVariant}
          readonly
        />
      {/if}
      {#if variant === "value"}
        <ClipboardPrimitive.ValueText
          class={cn(shellClassName, classNames?.value, slots.value())}
          data-variant={resolvedVariant}
        />
      {/if}
      <ClipboardPrimitive.Trigger
        aria-label={buttonAriaLabel}
        class={buttonRecipe({ size: buttonSize, variant: buttonVariant }).base()}
        type="button"
      >
        <ClipboardPrimitive.Indicator class={slots.indicator({ class: cn(classNames?.indicator) })}>
          {#snippet copied()}
            {#if copiedIcon}
              {@render copiedIcon()}
            {:else}
              <CheckIcon />
            {/if}
          {/snippet}
          {#if copyIcon}
            {@render copyIcon()}
          {:else}
            <ClipboardIcon />
          {/if}
        </ClipboardPrimitive.Indicator>
      </ClipboardPrimitive.Trigger>
    </ClipboardPrimitive.Control>
  </ClipboardPrimitive.Root>
{/snippet}

{#if label}
  <div class={slots.field({ class: cn(classNames?.field) })}>
    <span {...labelProps} class={slots.label({ class: cn(classNames?.label) })}>{label}</span>
    {@render control()}
  </div>
{:else}
  {@render control()}
{/if}
