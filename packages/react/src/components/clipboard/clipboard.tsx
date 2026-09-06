import type {
  ClipboardControlProps,
  ClipboardIndicatorProps,
  ClipboardInputProps,
  ClipboardRootProps,
  ClipboardValueTextProps,
} from "@ark-ui/react/clipboard";
import { Clipboard as ClipboardPrimitive } from "@ark-ui/react/clipboard";
import { CheckIcon, ClipboardIcon } from "@phosphor-icons/react";
import {
  type ClipboardRecipeSlot,
  type ClipboardVariantProps,
  clipboardRecipe,
} from "@pisagor/recipes/clipboard";
import { formControlShellRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { Button, type ButtonProps } from "../button";
import { ClipboardContext, useClipboard } from "./clipboard.context";

// #region Types
type FormControlVariant = "primary" | "secondary";

type ClipboardClassNames = VariantClassNames<ClipboardRecipeSlot>;

export interface ClipboardProps
  extends Omit<ClipboardRootProps, "children">,
    ClipboardVariantProps {
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
  /**
   * Style recipe. Defaults to `clipboardRecipe` from `@pisagor/recipes/clipboard`.
   *
   * @defaultValue clipboardRecipe
   */
  recipe?: typeof clipboardRecipe;
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

  return <ClipboardContext value={{ slots }}>{children}</ClipboardContext>;
}

function ClipboardRoot({ children, className, ...rest }: ClipboardRootProps) {
  return (
    <ClipboardPrimitive.Root {...rest} className={className}>
      {children}
    </ClipboardPrimitive.Root>
  );
}

function ClipboardControl({ children, className, ...rest }: ClipboardControlProps) {
  const { slots } = useClipboard();

  return (
    <ClipboardPrimitive.Control {...rest} className={slots.control({ className })}>
      {children}
    </ClipboardPrimitive.Control>
  );
}

function ClipboardInput({ className, ...rest }: ClipboardInputProps) {
  const { slots } = useClipboard();

  return <ClipboardPrimitive.Input {...rest} className={slots.input({ className })} />;
}

function ClipboardValue({ className, ...rest }: ClipboardValueTextProps) {
  const { slots } = useClipboard();

  return <ClipboardPrimitive.ValueText {...rest} className={slots.value({ className })} />;
}

function ClipboardIndicator({ className, ...rest }: ClipboardIndicatorProps) {
  const { slots } = useClipboard();

  return <ClipboardPrimitive.Indicator {...rest} className={slots.indicator({ className })} />;
}

function ClipboardField({ children, className, ...rest }: ComponentProps<"div">) {
  const { slots } = useClipboard();

  return (
    <div {...rest} className={slots.field({ className })}>
      {children}
    </div>
  );
}

function ClipboardLabel({ children, className, ...rest }: ComponentProps<"span">) {
  const { slots } = useClipboard();

  return (
    <span {...rest} className={slots.label({ className })}>
      {children}
    </span>
  );
}
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
    surfaceVariant: undefined,
    variant: controlVariantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = { variant: resolved.variant };
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
          <ClipboardValue {...controlProps} className={cn(shellClassName, classNames?.value)} />
        )}

        <ClipboardPrimitive.Trigger asChild>
          <Button
            aria-label={buttonAriaLabel}
            size={buttonSize}
            type="button"
            variant={buttonVariant}
          >
            <ClipboardIndicator className={classNames?.indicator} copied={copiedIcon}>
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
ClipboardControl.displayName = "Clipboard.Control";
ClipboardInput.displayName = "Clipboard.Input";
ClipboardValue.displayName = "Clipboard.Value";
ClipboardIndicator.displayName = "Clipboard.Indicator";
ClipboardField.displayName = "Clipboard.Field";
ClipboardLabel.displayName = "Clipboard.Label";
Clipboard.displayName = "Clipboard";
// #endregion
