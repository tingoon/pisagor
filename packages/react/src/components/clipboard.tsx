import {
  Clipboard as ClipboardPrimitive,
  type ClipboardRootProps,
} from "@ark-ui/react";
import { CheckIcon, ClipboardIcon } from "@phosphor-icons/react";
import type { ClipboardContract, ClipboardRootContract } from "@pisagor/props";
import {
  type ClipboardVariantProps,
  clipboardRecipe,
  formControlShellRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { useLocale } from "./provider/context";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: ClipboardStylesContext, withContext } =
  createSlotRecipeContext({
    name: "Clipboard",
    recipe: clipboardRecipe,
  });
// #endregion

// #region Types
export interface ClipboardProps
  extends
    Omit<ClipboardRootProps, "children">,
    ClipboardRootContract,
    ClipboardContract {
  copiedIcon?: ReactNode;
  copyIcon?: ReactNode;
  label?: ReactNode;
  /** Extra props forwarded to the label element */
  labelProps?: Omit<
    ComponentProps<typeof ClipboardPrimitive.Label>,
    "children" | "className"
  >;
}
// #endregion

// #region Parts
function ClipboardProvider({
  size = "md",
  valueSize = "md",
  children,
  recipe = clipboardRecipe,
}: {
  children: ReactNode;
  size?: ClipboardVariantProps["size"];
  valueSize?: ClipboardVariantProps["valueSize"];
  /**
   * Style recipe. Defaults to `clipboardRecipe` from
   * `@pisagor/recipes/clipboard`.
   *
   * @defaultValue clipboardRecipe
   */
  recipe?: typeof clipboardRecipe;
}) {
  const slots = recipe({ size, valueSize });

  return (
    <ClipboardStylesContext
      value={{ slots, variants: { size, valueSize } as never }}
    >
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

const ClipboardLabel = withContext(ClipboardPrimitive.Label, {
  name: "Label",
});
// #endregion

// #region Closed
export function Clipboard({
  size = "md",
  buttonSize = `icon-${size ?? "md"}` as ButtonProps["size"],
  buttonVariant,
  controlVariant: controlVariantProp,
  valueSize = size ?? "md",
  variant = "input",
  buttonAriaLabel: buttonAriaLabelProp,
  copiedIcon = <CheckIcon />,
  copyIcon = <ClipboardIcon />,
  label,
  labelProps,
  recipe,
  className,
  classNames,
  ...rest
}: ClipboardProps) {
  const { m } = useLocale();
  const buttonAriaLabel = m("clipboard.copy", buttonAriaLabelProp);
  const resolved = {
    surfaceVariant: useFormControlSurface(),
    variant: controlVariantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlProps = { "data-variant": resolved.variant };
  const shellClassName = formControlShellRecipe({ size, ...shellArgs });

  const control = (
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
  );

  return (
    <ClipboardProvider recipe={recipe} size={size} valueSize={valueSize}>
      <ClipboardRoot {...rest} className={className}>
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
      </ClipboardRoot>
    </ClipboardProvider>
  );
}
// #endregion

// #region Display Names
ClipboardProvider.displayName = "Clipboard.Provider";
ClipboardRoot.displayName = "Clipboard.Root";
Clipboard.displayName = "Clipboard";
// #endregion
