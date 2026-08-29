import { SignaturePad as SignaturePadPrimitive } from "@ark-ui/react/signature-pad";
import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";
import { formControlZoneRecipe } from "@pisagor/recipes/form-control";
import { type SignaturePadSlots, signaturePadRecipe } from "@pisagor/recipes/signature-pad";
import type { ComponentProps } from "react";
import type { VariantClassNames } from "../../internal/types";
import { cn } from "../../internal/utils";
import { Button } from "../button";
import { SignaturePadContext, useSignaturePad } from "./signature-pad.context";

// #region Types
type FormControlVariant = "primary" | "secondary";

type SignaturePadClassNames = VariantClassNames<SignaturePadSlots>;

type SignaturePadRootProps = ComponentProps<typeof SignaturePadPrimitive.Root> & {
  /** Visual shell variant. Defaults to `primary`. */
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
  variant,
  invalid = false,
  children,
  className,
  ...rest
}: SignaturePadRootProps) {
  const slots = signaturePadRecipe();

  return (
    <SignaturePadContext value={{ slots }}>
      <SignaturePadPrimitive.Root
        {...rest}
        aria-invalid={invalid || undefined}
        className={slots.base({ className })}
        data-invalid={invalid || undefined}
      >
        {children}
      </SignaturePadPrimitive.Root>
    </SignaturePadContext>
  );
}

function SignaturePadControl({
  invalid,
  children,
  className,
  ...rest
}: SignaturePadControlProps & { invalid?: boolean }) {
  const { slots } = useSignaturePad();
  const resolved = { surfaceVariant: undefined, variant: "primary" as FormControlVariant };
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };

  return (
    <SignaturePadPrimitive.Control
      {...rest}
      {...controlProps}
      className={cn(
        formControlZoneRecipe({ ...shellArgs }),
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
// #endregion

// #region Closed
export function SignaturePad({
  variant,
  invalid = false,
  className,
  classNames,
  ...rest
}: SignaturePadProps) {
  return (
    <SignaturePadRoot {...rest} className={className} invalid={invalid} variant={variant}>
      <SignaturePadControl className={classNames?.control} invalid={invalid}>
        <SignaturePadSegment className={classNames?.segment} />
        <SignaturePadClear className={classNames?.clear} />
        <SignaturePadGuide className={classNames?.guide} />
      </SignaturePadControl>
    </SignaturePadRoot>
  );
}
// #endregion

// #region Display Names
SignaturePadRoot.displayName = "SignaturePad.Root";
SignaturePadControl.displayName = "SignaturePad.Control";
SignaturePadSegment.displayName = "SignaturePad.Segment";
SignaturePadClear.displayName = "SignaturePad.Clear";
SignaturePadGuide.displayName = "SignaturePad.Guide";
SignaturePad.displayName = "SignaturePad";
// #endregion
