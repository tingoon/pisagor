<script lang="ts">
import {
  type ClipboardLabelProps,
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
import type { VariantClassNames } from "../../internal/types";
import Button from "../button.svelte";
import { useMessageResolver } from "../provider/provider.context";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { Context } from "./clipboard.context";
import ClipboardControl from "./clipboard-control.svelte";
import ClipboardField from "./clipboard-field.svelte";
import ClipboardIndicator from "./clipboard-indicator.svelte";
import ClipboardInput from "./clipboard-input.svelte";
import ClipboardLabel from "./clipboard-label.svelte";
import ClipboardRoot from "./clipboard-root.svelte";
import ClipboardValue from "./clipboard-value.svelte";

const t = useMessageResolver();

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ClipboardRootProps, "children"> & {
  /** Accessible label for icon-only copy buttons */
  buttonAriaLabel?: string;
  /**
   * Size scale for the shell, button and value.
   * @defaultValue "md"
   */
  size?: "sm" | "md" | "lg";
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
  labelProps?: Omit<ClipboardLabelProps, "children" | "class">;
  /**
   * Display mode for the copy control.
   * @defaultValue "input"
   */
  variant?: "button" | "input" | "value";
} & BaseClipboardProps;

let {
  size = "md",
  buttonSize: buttonSizeProp,
  buttonVariant,
  controlVariant: controlVariantProp,
  valueSize: valueSizeProp,
  variant = "input",
  buttonAriaLabel = t("clipboard.copy"),
  copiedIcon,
  copyIcon,
  label,
  labelProps,
  recipe = clipboardRecipe,
  classNames,
  ...rest
}: Props = $props();

const buttonSize = $derived(
  buttonSizeProp ?? (`icon-${size}` as ButtonProps["size"]),
);
const valueSize = $derived(valueSizeProp ?? size);
const slots = $derived(recipe({ size, valueSize }));
Context.set({
  get slots() {
    return slots;
  },
  get variants() {
    return { size, valueSize };
  },
});

const surfaceVariant = useFormControlSurface();
const controlVariant = $derived(
  controlVariantProp ?? ("primary" as FormControlVariant),
);
const shellClassName = $derived(
  formControlShellRecipe({
    size,
    surfaceVariant,
    variant: controlVariant,
  }),
);
</script>

{#snippet control()}
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
{/snippet}

<ClipboardRoot {...rest}>
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
</ClipboardRoot>
