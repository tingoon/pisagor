import { Clipboard as ClipboardPrimitive } from "@ark-ui/react/clipboard";
import { CheckIcon, ClipboardIcon } from "@phosphor-icons/react";
import {
  type ClipboardSlots,
  type ClipboardVariantProps,
  clipboardVariants,
} from "@pisagor/styles/ui/clipboard";
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
import { ClipboardContext, useClipboard } from "./clipboard.context";

// #region Types
type ClipboardClassNames = VariantClassNames<ClipboardSlots>;

type ClipboardValueSize = ClipboardVariantProps["valueSize"];

type ClipboardRootProps = ComponentProps<typeof ClipboardPrimitive.Root> & WithTestId;

export interface ClipboardProps extends Omit<ClipboardRootProps, "children"> {
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

interface ClipboardControlProps extends ComponentProps<typeof ClipboardPrimitive.Control> {}

interface ClipboardInputProps extends ComponentProps<typeof ClipboardPrimitive.Input> {}

interface ClipboardValueProps extends ComponentProps<typeof ClipboardPrimitive.ValueText> {}

interface ClipboardIndicatorProps extends ComponentProps<typeof ClipboardPrimitive.Indicator> {}

interface ClipboardFieldProps extends ComponentProps<"div"> {}

interface ClipboardLabelProps extends ComponentProps<"span"> {}
// #endregion

// #region Parts
function ClipboardProvider({
  children,
  valueSize = "md",
}: {
  children: ReactNode;
  valueSize?: ClipboardValueSize;
}) {
  const slots = clipboardVariants({ valueSize });

  return <ClipboardContext value={{ slots }}>{children}</ClipboardContext>;
}

function ClipboardRoot({ children, className, testId, ...rest }: ClipboardRootProps) {
  return (
    <ClipboardPrimitive.Root {...rest} className={className} data-testid={testId}>
      {children}
    </ClipboardPrimitive.Root>
  );
}

function ClipboardControl({ className, children, ...rest }: ClipboardControlProps) {
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

function ClipboardValue({ className, ...rest }: ClipboardValueProps) {
  const { slots } = useClipboard();

  return <ClipboardPrimitive.ValueText {...rest} className={slots.value({ className })} />;
}

function ClipboardIndicator({ className, ...rest }: ClipboardIndicatorProps) {
  const { slots } = useClipboard();

  return <ClipboardPrimitive.Indicator {...rest} className={slots.indicator({ className })} />;
}

function ClipboardField({ className, children, ...rest }: ClipboardFieldProps) {
  const { slots } = useClipboard();

  return (
    <div {...rest} className={slots.field({ className })}>
      {children}
    </div>
  );
}

function ClipboardLabel({ className, children, ...rest }: ClipboardLabelProps) {
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
  buttonAriaLabel = "Copy to clipboard",
  buttonSize = "icon-md",
  buttonVariant,
  className,
  classNames,
  controlVariant: controlVariantProp,
  copiedIcon = <CheckIcon />,
  copyIcon = <ClipboardIcon />,
  label,
  labelProps,
  testId,
  valueSize = "md",
  variant = "input",
  ...rest
}: ClipboardProps) {
  const resolved = useFormControlVariant(controlVariantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);
  const shellClassName = formControlShellVariants({ size: "md", ...shellArgs });

  const control = (
    <ClipboardRoot {...rest} className={className} testId={testId}>
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
    <ClipboardProvider valueSize={valueSize}>
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
