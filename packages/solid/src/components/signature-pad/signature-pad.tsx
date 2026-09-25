import type {
  SignaturePadClearTriggerProps,
  SignaturePadControlProps,
  SignaturePadGuideProps,
  SignaturePadRootProps as SignaturePadPrimitiveRootProps,
  SignaturePadSegmentProps,
} from "@ark-ui/solid/signature-pad";
import { SignaturePad as SignaturePadPrimitive } from "@ark-ui/solid/signature-pad";
import { formControlZoneRecipe } from "@pisagor/recipes/form-control";
import { type SignaturePadRecipeSlot, signaturePadRecipe } from "@pisagor/recipes/signature-pad";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { ArrowCounterClockwiseIcon } from "../../internal/icons";
import type { VariantClassNames } from "../../internal/types";
import { Button } from "../button";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { SignaturePadContext, useSignaturePad } from "./signature-pad.context";

type FormControlVariant = "primary" | "secondary";
type SignaturePadClassNames = VariantClassNames<SignaturePadRecipeSlot>;

type SignaturePadRootProps = SignaturePadPrimitiveRootProps & {
  variant?: FormControlVariant;
  recipe?: typeof signaturePadRecipe;
  invalid?: boolean;
};

export interface SignaturePadProps extends Omit<SignaturePadRootProps, "children"> {
  classNames?: SignaturePadClassNames;
}

type SignaturePadClearProps = SignaturePadClearTriggerProps;

function SignaturePadRoot(props: SignaturePadRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "invalid", "children", "recipe", "class"]);
  const slots = () => (local.recipe ?? signaturePadRecipe)();
  const invalid = () => local.invalid ?? false;

  return (
    <SignaturePadContext value={{ slots: slots() }}>
      <SignaturePadPrimitive.Root
        {...rest}
        aria-invalid={invalid() || undefined}
        class={slots().base({ class: cn(local.class) })}
        data-invalid={invalid() || undefined}
      >
        {local.children}
      </SignaturePadPrimitive.Root>
    </SignaturePadContext>
  );
}

function SignaturePadControl(props: SignaturePadControlProps & { invalid?: boolean }): JSX.Element {
  const [local, rest] = splitProps(props, ["invalid", "children", "class"]);
  const { slots } = useSignaturePad();
  const surfaceVariant = useFormControlSurface();
  const variant = "primary" as FormControlVariant;

  return (
    <SignaturePadPrimitive.Control
      {...rest}
      class={cn(
        formControlZoneRecipe({ surfaceVariant, variant }),
        slots.control({
          class: cn(variant === "primary" && "shadow-xs/5", local.class),
        }),
      )}
      data-invalid={local.invalid || undefined}
      data-variant={variant}
    >
      {local.children}
    </SignaturePadPrimitive.Control>
  );
}

function SignaturePadSegment(props: SignaturePadSegmentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSignaturePad();
  return <SignaturePadPrimitive.Segment {...rest} class={slots.segment({ class: local.class })} />;
}

function SignaturePadClear(props: SignaturePadClearProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSignaturePad();
  return (
    <SignaturePadPrimitive.ClearTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({ class: slots.clear({ class: local.class }) })}
          aria-label="Clear signature"
          size="icon-md"
          variant="ghost"
        >
          <ArrowCounterClockwiseIcon />
        </Button>
      )}
    />
  );
}

function SignaturePadGuide(props: SignaturePadGuideProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSignaturePad();
  return <SignaturePadPrimitive.Guide {...rest} class={slots.guide({ class: local.class })} />;
}

export function SignaturePad(props: SignaturePadProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "invalid", "class", "classNames"]);
  const invalid = () => local.invalid ?? false;

  return (
    <SignaturePadRoot {...rest} class={local.class} invalid={invalid()} variant={local.variant}>
      <SignaturePadControl class={local.classNames?.control} invalid={invalid()}>
        <SignaturePadSegment class={local.classNames?.segment} />
        <SignaturePadClear class={local.classNames?.clear} />
        <SignaturePadGuide class={local.classNames?.guide} />
      </SignaturePadControl>
    </SignaturePadRoot>
  );
}
