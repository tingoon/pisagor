import {
  SignaturePad as SignaturePadPrimitive,
  type SignaturePadClearTriggerProps,
  type SignaturePadControlProps,
  type SignaturePadRootProps as SignaturePadPrimitiveRootProps,
} from "@ark-ui/react";
import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";
import type { SignaturePadProps as BaseSignaturePadRootProps } from "@pisagor/props";
import {
  formControlZoneRecipe,
  type SignaturePadRecipeSlot,
  signaturePadRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { FormControlVariant, VariantClassNames } from "../internal/types";
import { Button } from "./button";
import { useMessage } from "./provider/context";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const {
  Context: SignaturePadStylesContext,
  useStyles: useSignaturePad,
  withContext,
} = createSlotRecipeContext({
  name: "SignaturePad",
  recipe: signaturePadRecipe,
});
// #endregion

// #region Types

type SignaturePadClassNames = VariantClassNames<SignaturePadRecipeSlot>;

type SignaturePadRootProps = SignaturePadPrimitiveRootProps & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  /** Marks the control as invalid for styling and assistive tech. */
  invalid?: boolean;
} & BaseSignaturePadRootProps;

export interface SignaturePadProps extends Omit<
  SignaturePadRootProps,
  "children"
> {
  /** Slot class names */
  classNames?: SignaturePadClassNames;
}

type SignaturePadClearProps = SignaturePadClearTriggerProps;

// #endregion

// #region Parts
function SignaturePadRoot({
  variant,
  invalid = false,
  children,
  recipe = signaturePadRecipe,
  className,
  ...rest
}: SignaturePadRootProps) {
  const slots = recipe();

  return (
    <SignaturePadStylesContext value={{ slots, variants: {} as never }}>
      <SignaturePadPrimitive.Root
        {...rest}
        aria-invalid={invalid || undefined}
        className={slots.base({ className })}
        data-invalid={invalid || undefined}
      >
        {children}
      </SignaturePadPrimitive.Root>
    </SignaturePadStylesContext>
  );
}

function SignaturePadControl({
  invalid,
  variant = "primary",
  children,
  className,
  ...rest
}: SignaturePadControlProps & {
  invalid?: boolean;
  variant?: FormControlVariant;
}) {
  const { slots } = useSignaturePad();
  const resolved = {
    surfaceVariant: useFormControlSurface(),
    variant,
  };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlProps = { "data-variant": resolved.variant };

  return (
    <SignaturePadPrimitive.Control
      {...rest}
      {...controlProps}
      className={cn(
        formControlZoneRecipe({ ...shellArgs }),
        slots.control({
          className,
          variant: resolved.variant,
        }),
      )}
      data-invalid={invalid || undefined}
    >
      {children}
    </SignaturePadPrimitive.Control>
  );
}

const SignaturePadSegment = withContext(SignaturePadPrimitive.Segment, {
  name: "Segment",
});

function SignaturePadClear({ className, ...rest }: SignaturePadClearProps) {
  const { slots } = useSignaturePad();

  return (
    <SignaturePadPrimitive.ClearTrigger
      {...rest}
      asChild
      className={slots.clear({ className })}
    >
      <Button
        aria-label={useMessage("signaturePad.clearSignature")}
        size="icon-md"
        variant="ghost"
      >
        <ArrowCounterClockwiseIcon />
      </Button>
    </SignaturePadPrimitive.ClearTrigger>
  );
}

const SignaturePadGuide = withContext(SignaturePadPrimitive.Guide, {
  name: "Guide",
});
// #endregion

// #region Closed
function SignaturePadShorthand({
  variant,
  invalid = false,
  className,
  classNames,
  ...rest
}: SignaturePadProps) {
  return (
    <SignaturePadRoot
      {...rest}
      className={className}
      invalid={invalid}
      variant={variant}
    >
      <SignaturePadControl
        className={classNames?.control}
        invalid={invalid}
        variant={variant}
      >
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
SignaturePadClear.displayName = "SignaturePad.Clear";
SignaturePadShorthand.displayName = "SignaturePad";
// #endregion

export const SignaturePad = Object.assign(SignaturePadShorthand, {
  Clear: SignaturePadClear,
  Control: SignaturePadControl,
  Guide: SignaturePadGuide,
  Root: SignaturePadRoot,
  Segment: SignaturePadSegment,
});
