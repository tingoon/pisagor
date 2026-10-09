import type { ClipboardRootProps } from "@ark-ui/react/clipboard";
import { Clipboard as ClipboardPrimitive } from "@ark-ui/react/clipboard";
import { CheckIcon, ClipboardIcon } from "@phosphor-icons/react";
import type { ClipboardProps as BaseClipboardProps } from "@pisagor/props";
import {
  type ClipboardRecipeSlot,
  type ClipboardVariantProps,
  clipboardRecipe,
  formControlShellRecipe,
} from "@pisagor/recipes";

import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";
import { Button, type ButtonProps } from "./button";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: ClipboardStylesContext, withContext } =
  createSlotRecipeContext({
    name: "Clipboard",
    recipe: clipboardRecipe,
  });
// #endregion

// #region Types
type FormControlVariant = "primary" | "secondary";

type ClipboardClassNames = VariantClassNames<ClipboardRecipeSlot>;

export interface ClipboardProps
  extends Omit<ClipboardRootProps, "children">,
    BaseClipboardProps {
  /**
   * Size of the copy button.
   *
   * @defaultValue "icon-md"
   */
  buttonSize?: ButtonProps["size"];
  /** Variant of the copy button */
  buttonVariant?: ButtonProps["variant"];
  /**
   * Visual shell variant for input/value display modes.
   * Defaults to `primary`.
   */
  controlVariant?: FormControlVariant;
  /**
   * Display mode for the copy control.
   *
   * @defaultValue "input"
   */
  variant?: "button" | "input" | "value";
  /** Accessible label for icon-only copy buttons */
  buttonAriaLabel?: string;
  /** Icon shown after a successful copy */
  copiedIcon?: ReactNode;
  /** Icon shown before copying */
  copyIcon?: ReactNode;
  /** Optional label rendered above the control. */
  label?: string;
  /** Slot class names */
  classNames?: ClipboardClassNames;
  /** Extra props forwarded to the label element */
  labelProps?: Omit<ComponentProps<"span">, "children" | "className">;
}
// #endregion

// #region Parts
function ClipboardProvider({
  valueSize = "md",
  children,
  recipe = clipboardRecipe,
}: {
  children: ReactNode;
  valueSize?: ClipboardVariantProps["valueSize"];
  /**
   * Style recipe. Defaults to `clipboardRecipe` from `@pisagor/recipes/clipboard`.
   *
   * @defaultValue clipboardRecipe
   */
  recipe?: typeof clipboardRecipe;
}) {
  const slots = recipe({ valueSize });

  return (
    <ClipboardStylesContext value={{ slots, variants: { valueSize } as never }}>
      {children}
    </ClipboardStylesContext>
  );
}

function ClipboardRoot({ children, className, ...rest }: ClipboardRootProps) {
  return (
    <ClipboardPrimitive.Root {...rest} className={className}>
      {children}
    </ClipboardPrimitive.Root>
  );
}

const ClipboardControl = withContext(ClipboardPrimitive.Control, {
  name: "Control",
});

const ClipboardInput = withContext(ClipboardPrimitive.Input, {
  name: "Input",
});

const ClipboardValue = withContext(ClipboardPrimitive.ValueText, {
  name: "Value",
});

const ClipboardIndicator = withContext(ClipboardPrimitive.Indicator, {
  name: "Indicator",
});

const ClipboardField = withContext("div", {
  name: "Field",
});

const ClipboardLabel = withContext("span", {
  name: "Label",
});
// #endregion

// #region Closed
export function Clipboard({
  buttonSize = "icon-md",
  buttonVariant,
  controlVariant: controlVariantProp,
  valueSize = "md",
  variant = "input",
  buttonAriaLabel = "Copy to clipboard",
  copiedIcon = <CheckIcon />,
  copyIcon = <ClipboardIcon />,
  label,
  labelProps,
  recipe,
  className,
  classNames,
  ...rest
}: ClipboardProps) {
  const resolved = {
    surfaceVariant: useFormControlSurface(),
    variant: controlVariantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlProps = { "data-variant": resolved.variant };
  const shellClassName = formControlShellRecipe({ size: "md", ...shellArgs });

  const control = (
    <ClipboardRoot {...rest} className={className}>
      <ClipboardControl className={classNames?.control}>
        {variant === "input" && (
          <ClipboardInput
            {...controlProps}
            className={cn(shellClassName, classNames?.input)}
            readOnly
          />
        )}

        {variant === "value" && (
          <ClipboardValue
            {...controlProps}
            className={cn(shellClassName, classNames?.value)}
          />
        )}

        <ClipboardPrimitive.Trigger asChild>
          <Button
            aria-label={buttonAriaLabel}
            size={buttonSize}
            type="button"
            variant={buttonVariant}
          >
            <ClipboardIndicator
              className={classNames?.indicator}
              copied={copiedIcon}
            >
              {copyIcon}
            </ClipboardIndicator>
          </Button>
        </ClipboardPrimitive.Trigger>
      </ClipboardControl>
    </ClipboardRoot>
  );

  return (
    <ClipboardProvider recipe={recipe} valueSize={valueSize}>
      {label ? (
        <ClipboardField className={classNames?.field}>
          <ClipboardLabel {...labelProps} className={classNames?.label}>
            {label}
          </ClipboardLabel>
          {control}
        </ClipboardField>
      ) : (
        control
      )}
    </ClipboardProvider>
  );
}
// #endregion

// #region Display Names
ClipboardProvider.displayName = "Clipboard.Provider";
ClipboardRoot.displayName = "Clipboard.Root";
Clipboard.displayName = "Clipboard";
// #endregion
