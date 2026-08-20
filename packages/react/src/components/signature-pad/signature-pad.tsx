import { SignaturePad as SignaturePadPrimitive } from "@ark-ui/react/signature-pad";
import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";
import { type SignaturePadSlots, signaturePadVariants } from "@pisagor/styles/ui/signature-pad";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  formControlZoneVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { Button } from "../button";
import { SignaturePadContext, useSignaturePad } from "./signature-pad.context";

// #region Types
type SignaturePadClassNames = VariantClassNames<SignaturePadSlots>;

type SignaturePadRootProps = ComponentProps<typeof SignaturePadPrimitive.Root> &
  WithTestId & {
    /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
    variant?: FormControlVariant;
    /** Marks the control as invalid for styling and assistive tech. */
    invalid?: boolean;
  };

export interface SignaturePadProps extends Omit<SignaturePadRootProps, "children"> {
  /** Slot class names */
  classNames?: SignaturePadClassNames;
}

type SignaturePadControlProps = ComponentProps<typeof SignaturePadPrimitive.Control>;

type SignaturePadSegmentProps = ComponentProps<typeof SignaturePadPrimitive.Segment>;

type SignaturePadClearProps = ComponentProps<typeof SignaturePadPrimitive.ClearTrigger>;

type SignaturePadGuideProps = ComponentProps<typeof SignaturePadPrimitive.Guide>;
// #endregion

// #region Parts
function SignaturePadRoot({
  children,
  className,
  invalid = false,
  testId,
  variant,
  ...rest
}: SignaturePadRootProps) {
  const slots = signaturePadVariants();

  return (
    <FormControlVariantProvider value={variant}>
      <SignaturePadContext value={{ slots }}>
        <SignaturePadPrimitive.Root
          {...rest}
          aria-invalid={invalid || undefined}
          className={slots.base({ className })}
          data-invalid={invalid || undefined}
          data-testid={testId}
        >
          {children}
        </SignaturePadPrimitive.Root>
      </SignaturePadContext>
    </FormControlVariantProvider>
  );
}

function SignaturePadControl({
  children,
  className,
  invalid,
  ...rest
}: SignaturePadControlProps & { invalid?: boolean }) {
  const { slots } = useSignaturePad();
  const resolved = useFormControlVariant();
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);

  return (
    <SignaturePadPrimitive.Control
      {...rest}
      {...controlProps}
      className={cn(
        formControlZoneVariants({ ...shellArgs }),
        slots.control({
          className: cn(resolved.variant === "primary" && "shadow-xs/5", className),
        }),
      )}
      data-invalid={invalid || undefined}
    >
      {children}
    </SignaturePadPrimitive.Control>
  );
}

function SignaturePadSegment({ className, ...rest }: SignaturePadSegmentProps) {
  const { slots } = useSignaturePad();

  return <SignaturePadPrimitive.Segment {...rest} className={slots.segment({ className })} />;
}

function SignaturePadClear({ className, ...rest }: SignaturePadClearProps) {
  const { slots } = useSignaturePad();

  return (
    <SignaturePadPrimitive.ClearTrigger {...rest} asChild className={slots.clear({ className })}>
      <Button aria-label="Clear signature" size="icon-md" variant="ghost">
        <ArrowCounterClockwiseIcon />
      </Button>
    </SignaturePadPrimitive.ClearTrigger>
  );
}

function SignaturePadGuide({ className, ...rest }: SignaturePadGuideProps) {
  const { slots } = useSignaturePad();

  return <SignaturePadPrimitive.Guide {...rest} className={slots.guide({ className })} />;
}

SignaturePadRoot.displayName = "SignaturePad.Root";
SignaturePadControl.displayName = "SignaturePad.Control";
SignaturePadSegment.displayName = "SignaturePad.Segment";
SignaturePadClear.displayName = "SignaturePad.Clear";
SignaturePadGuide.displayName = "SignaturePad.Guide";
// #endregion

// #region Closed
export function SignaturePad({
  className,
  classNames,
  invalid = false,
  testId,
  variant,
  ...rest
}: SignaturePadProps) {
  return (
    <SignaturePadRoot
      {...rest}
      className={className}
      invalid={invalid}
      testId={testId}
      variant={variant}
    >
      <SignaturePadControl className={classNames?.control} invalid={invalid}>
        <SignaturePadSegment className={classNames?.segment} />
        <SignaturePadClear className={classNames?.clear} />
        <SignaturePadGuide className={classNames?.guide} />
      </SignaturePadControl>
    </SignaturePadRoot>
  );
}
SignaturePad.displayName = "SignaturePad";
// #endregion
