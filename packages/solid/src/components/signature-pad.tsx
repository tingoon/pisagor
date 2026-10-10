import type {
  SignaturePadClearTriggerProps,
  SignaturePadControlProps,
  SignaturePadGuideProps,
  SignaturePadRootProps as SignaturePadPrimitiveRootProps,
  SignaturePadSegmentProps,
} from "@ark-ui/solid/signature-pad";
import { SignaturePad as SignaturePadPrimitive } from "@ark-ui/solid/signature-pad";
import type { SignaturePadProps as BaseSignaturePadRootProps } from "@pisagor/props";
import {
  formControlZoneRecipe,
  type SignaturePadRecipeSlot,
  signaturePadRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Component, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { ArrowCounterClockwiseIcon } from "../internal/icons";
import type { VariantClassNames } from "../internal/types";
import { Button } from "./button";
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

type FormControlVariant = "primary" | "secondary";
type SignaturePadClassNames = VariantClassNames<SignaturePadRecipeSlot>;

type SignaturePadRootProps = SignaturePadPrimitiveRootProps & {
  variant?: FormControlVariant;
  invalid?: boolean;
} & BaseSignaturePadRootProps;

export interface SignaturePadProps
  extends Omit<SignaturePadRootProps, "children"> {
  classNames?: SignaturePadClassNames;
}

type SignaturePadClearProps = SignaturePadClearTriggerProps;

function SignaturePadRoot(props: SignaturePadRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["invalid", "recipe", "class"]);

  const slots = createMemo(() => (local.recipe ?? signaturePadRecipe)());

  return (
    <SignaturePadStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <SignaturePadPrimitive.Root
        {...rest}
        aria-invalid={local.invalid || undefined}
        class={slots().base({ class: local.class })}
        data-invalid={local.invalid || undefined}
      />
    </SignaturePadStylesContext>
  );
}

function SignaturePadControl(
  props: SignaturePadControlProps & {
    invalid?: boolean;
    variant?: FormControlVariant;
  },
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "invalid",
    "variant",
    "children",
    "class",
  ]);
  const styles = useSignaturePad();
  const surfaceVariant = useFormControlSurface();
  const variant = () => local.variant ?? ("primary" as FormControlVariant);

  return (
    <SignaturePadPrimitive.Control
      {...rest}
      class={cn(
        formControlZoneRecipe({ surfaceVariant, variant: variant() }),
        styles.slots.control({
          class: local.class,
          variant: variant(),
        }),
      )}
      data-invalid={local.invalid || undefined}
      data-variant={variant()}
    >
      {local.children}
    </SignaturePadPrimitive.Control>
  );
}

const SignaturePadSegment: Component<SignaturePadSegmentProps> = withContext(
  SignaturePadPrimitive.Segment,
  { name: "Segment" },
);

function SignaturePadClear(props: SignaturePadClearProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useSignaturePad();
  return (
    <SignaturePadPrimitive.ClearTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({
            class: styles.slots.clear({ class: local.class }),
          })}
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

const SignaturePadGuide: Component<SignaturePadGuideProps> = withContext(
  SignaturePadPrimitive.Guide,
  { name: "Guide" },
);

export function SignaturePad(props: SignaturePadProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "invalid",
    "class",
    "classNames",
  ]);
  const invalid = () => local.invalid ?? false;

  return (
    <SignaturePadRoot
      {...rest}
      class={local.class}
      invalid={invalid()}
      variant={local.variant}
    >
      <SignaturePadControl
        class={local.classNames?.control}
        invalid={invalid()}
        variant={local.variant}
      >
        <SignaturePadSegment class={local.classNames?.segment} />
        <SignaturePadClear class={local.classNames?.clear} />
        <SignaturePadGuide class={local.classNames?.guide} />
      </SignaturePadControl>
    </SignaturePadRoot>
  );
}
