import { Clipboard as ClipboardPrimitive } from "@ark-ui/react/clipboard";
import { CheckIcon, ClipboardIcon } from "@phosphor-icons/react";
import { type ClipboardVariantProps, clipboardVariants } from "@pisagor/styles/ui/clipboard";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  formControlShellVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { Button, type ButtonProps } from "../button";

// #region Types
type ClipboardClassNames = VariantClassNames<typeof clipboardVariants>;

type ClipboardValueSize = ClipboardVariantProps["valueSize"];

export type ClipboardRootProps = ComponentProps<typeof ClipboardPrimitive.Root>;

export interface ClipboardProps extends Omit<ClipboardRootProps, "children">, WithTestId {
  /**
   * Display mode for the copy control.
   *
   * @defaultValue "input"
   */
  variant?: "button" | "input" | "value";
  /**
   * Visual shell variant for input/value display modes.
   * When omitted, resolves from the nearest `Surface` context.
   */
  controlVariant?: FormControlVariant;
  /**
   * Size of the value text when `variant` is `"value"`.
   *
   * @defaultValue "md"
   */
  valueSize?: ClipboardValueSize;
  /**
   * Size of the copy button.
   *
   * @defaultValue "icon-md"
   */
  buttonSize?: ButtonProps["size"];
  /** Variant of the copy button */
  buttonVariant?: ButtonProps["variant"];
  /** Optional label rendered above the control. */
  label?: string;
  /** Icon shown after a successful copy */
  copiedIcon?: ReactNode;
  /** Icon shown before copying */
  copyIcon?: ReactNode;
  /** Accessible label for icon-only copy buttons */
  buttonAriaLabel?: string;
  /** Slot class names */
  classNames?: ClipboardClassNames;
  /** Extra props forwarded to the label element */
  labelProps?: Omit<ComponentProps<"span">, "children" | "className">;
}
// #endregion

// #region Part
export function Clipboard({
  variant = "input",
  controlVariant: controlVariantProp,
  valueSize = "md",
  buttonSize = "icon-md",
  buttonVariant,
  label,
  copiedIcon = <CheckIcon />,
  copyIcon = <ClipboardIcon />,
  buttonAriaLabel = "Copy to clipboard",
  className,
  classNames,
  labelProps,
  testId,
  ...rest
}: ClipboardProps) {
  const resolved = useFormControlVariant(controlVariantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);
  const shellClassName = formControlShellVariants({ size: "md", ...shellArgs });
  const slots = clipboardVariants({ valueSize });

  const control = (
    <ClipboardPrimitive.Root {...rest} className={cn(className)} data-testid={testId}>
      <ClipboardPrimitive.Control className={slots.control({ className: classNames?.control })}>
        {variant === "input" && (
          <ClipboardPrimitive.Input
            {...controlProps}
            className={cn(shellClassName, slots.input({ className: classNames?.input }))}
            readOnly
          />
        )}

        {variant === "value" && (
          <ClipboardPrimitive.ValueText
            {...controlProps}
            className={cn(shellClassName, slots.value({ className: classNames?.value }))}
          />
        )}

        <ClipboardPrimitive.Trigger asChild>
          <Button
            aria-label={buttonAriaLabel}
            size={buttonSize}
            type="button"
            variant={buttonVariant}
          >
            <ClipboardPrimitive.Indicator
              className={slots.indicator({ className: classNames?.indicator })}
              copied={copiedIcon}
            >
              {copyIcon}
            </ClipboardPrimitive.Indicator>
          </Button>
        </ClipboardPrimitive.Trigger>
      </ClipboardPrimitive.Control>
    </ClipboardPrimitive.Root>
  );

  if (!label) {
    return control;
  }

  return (
    <div className={slots.field({ className: classNames?.field })}>
      <span {...labelProps} className={slots.label({ className: classNames?.label })}>
        {label}
      </span>
      {control}
    </div>
  );
}
Clipboard.displayName = "Clipboard";
// #endregion
