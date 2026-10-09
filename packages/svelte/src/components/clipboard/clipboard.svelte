<script lang="ts">
import {
  Clipboard as ClipboardPrimitive,
  type ClipboardRootProps,
} from "@ark-ui/svelte/clipboard";
import type {
  ClipboardProps as BaseClipboardProps,
  ButtonProps,
} from "@pisagor/props";
import {
  type ClipboardRecipeSlot,
  clipboardRecipe,
  formControlShellRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import ClipboardIcon from "phosphor-svelte/lib/ClipboardIcon";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { VariantClassNames } from "../../internal/types";
import Button from "../button.svelte";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { Context } from "./clipboard.context";
import ClipboardControl from "./clipboard-control.svelte";
import ClipboardField from "./clipboard-field.svelte";
import ClipboardIndicator from "./clipboard-indicator.svelte";
import ClipboardInput from "./clipboard-input.svelte";
import ClipboardLabel from "./clipboard-label.svelte";
import ClipboardRoot from "./clipboard-root.svelte";
import ClipboardValue from "./clipboard-value.svelte";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ClipboardRootProps, "children"> & {
  /** Accessible label for icon-only copy buttons */
  buttonAriaLabel?: string;
  /**
   * Size of the copy button.
   * @defaultValue "icon-md"
   */
  buttonSize?: ButtonProps["size"];
  /** Variant of the copy button */
  buttonVariant?: ButtonProps["variant"];
  /** Slot class names */
  classNames?: VariantClassNames<ClipboardRecipeSlot>;
  /**
   * Visual shell variant for input/value display modes.
   * Defaults to `primary`.
   */
  controlVariant?: FormControlVariant;
  /** Icon shown after a successful copy */
  copiedIcon?: Snippet;
  /** Icon shown before copying */
  copyIcon?: Snippet;
  /** Optional label rendered above the control. */
  label?: string;
  /** Extra props forwarded to the label element */
  labelProps?: Omit<HTMLAttributes<HTMLSpanElement>, "children" | "class">;
  /**
   * Display mode for the copy control.
   * @defaultValue "input"
   */
  variant?: "button" | "input" | "value";
} & BaseClipboardProps;

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
  classNames,
  ...rest
}: Props = $props();

const slots = $derived(recipe({ valueSize }));
Context.set({
  get slots() {
    return slots;
  },
  get variants() {
    return { valueSize };
  },
});

const surfaceVariant = useFormControlSurface();
const controlVariant = $derived(
  controlVariantProp ?? ("primary" as FormControlVariant),
);
const shellClassName = $derived(
  formControlShellRecipe({
    size: "md",
    surfaceVariant,
    variant: controlVariant,
  }),
);
</script>

{#snippet control()}
  <ClipboardRoot {...rest}>
    <ClipboardControl class={classNames?.control}>
      {#if variant === "input"}
        <ClipboardInput
          class={cn(shellClassName, classNames?.input)}
          data-variant={controlVariant}
          readonly
        />
      {/if}
      {#if variant === "value"}
        <ClipboardValue
          class={cn(shellClassName, classNames?.value)}
          data-variant={controlVariant}
        />
      {/if}
      <ClipboardPrimitive.Trigger>
        {#snippet asChild(
          props,
        )}
          <Button
            {...props()}
            aria-label={buttonAriaLabel}
            size={buttonSize}
            type="button"
            variant={buttonVariant}
          >
            <ClipboardIndicator class={classNames?.indicator}>
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
            </ClipboardIndicator>
          </Button>
        {/snippet}
      </ClipboardPrimitive.Trigger>
    </ClipboardControl>
  </ClipboardRoot>
{/snippet}

{#if label}
  <ClipboardField class={classNames?.field}>
    <ClipboardLabel {...labelProps} class={classNames?.label}>
      {label}
    </ClipboardLabel>
    {@render control()}
  </ClipboardField>
{:else}
  {@render control()}
{/if}
