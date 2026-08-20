import { SignaturePad as SignaturePadPrimitive } from "@ark-ui/react/signature-pad";
import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";
import { signaturePadVariants } from "@pisagor/styles/ui/signature-pad";
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

// #region Types
type SignaturePadClassNames = VariantClassNames<typeof signaturePadVariants>;

export type SignaturePadRootProps = ComponentProps<typeof SignaturePadPrimitive.Root>;

export interface SignaturePadProps extends SignaturePadRootProps, WithTestId {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  /** Marks the control as invalid for styling and assistive tech. */
  invalid?: boolean;
  /** Slot class names */
  classNames?: SignaturePadClassNames;
}

export interface SignaturePadControlProps
  extends Omit<ComponentProps<typeof SignaturePadPrimitive.Control>, "className"> {
  classNames?: SignaturePadClassNames;
}

export interface SignaturePadSegmentProps
  extends Omit<ComponentProps<typeof SignaturePadPrimitive.Segment>, "className"> {
  classNames?: SignaturePadClassNames;
}

export interface SignaturePadClearProps
  extends Omit<ComponentProps<typeof SignaturePadPrimitive.ClearTrigger>, "className"> {
  classNames?: SignaturePadClassNames;
}

export interface SignaturePadGuideProps
  extends Omit<ComponentProps<typeof SignaturePadPrimitive.Guide>, "className"> {
  classNames?: SignaturePadClassNames;
}
// #endregion

// #region Part
export function SignaturePad({
  className,
  classNames,
  testId,
  variant,
  invalid = false,
  ...rest
}: SignaturePadProps) {
  const slots = signaturePadVariants();

  return (
    <FormControlVariantProvider value={variant}>
      <SignaturePadPrimitive.Root
        {...rest}
        aria-invalid={invalid || undefined}
        className={slots.base({ className: cn(className, classNames?.base) })}
        data-invalid={invalid || undefined}
        data-testid={testId}
      >
        <SignaturePadControl classNames={classNames} invalid={invalid}>
          <SignaturePadSegment classNames={classNames} />
          <SignaturePadClear classNames={classNames} />
          <SignaturePadGuide classNames={classNames} />
        </SignaturePadControl>
      </SignaturePadPrimitive.Root>
    </FormControlVariantProvider>
  );
}

function SignaturePadControl({
  classNames,
  children,
  invalid,
  ...rest
}: SignaturePadControlProps & { invalid?: boolean }) {
  const slots = signaturePadVariants();
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
          className: cn(resolved.variant === "primary" && "shadow-xs/5", classNames?.control),
        }),
      )}
      data-invalid={invalid || undefined}
    >
      {children}
    </SignaturePadPrimitive.Control>
  );
}

function SignaturePadSegment({ classNames, ...rest }: SignaturePadSegmentProps) {
  const slots = signaturePadVariants();

  return (
    <SignaturePadPrimitive.Segment
      {...rest}
      className={slots.segment({ className: classNames?.segment })}
    />
  );
}

function SignaturePadClear({ classNames, ...rest }: SignaturePadClearProps) {
  const slots = signaturePadVariants();

  return (
    <SignaturePadPrimitive.ClearTrigger
      {...rest}
      asChild
      className={slots.clear({ className: classNames?.clear })}
    >
      <Button aria-label="Clear signature" size="icon-md" variant="ghost">
        <ArrowCounterClockwiseIcon />
      </Button>
    </SignaturePadPrimitive.ClearTrigger>
  );
}

function SignaturePadGuide({ classNames, ...rest }: SignaturePadGuideProps) {
  const slots = signaturePadVariants();

  return (
    <SignaturePadPrimitive.Guide
      {...rest}
      className={slots.guide({ className: classNames?.guide })}
    />
  );
}
// #endregion
