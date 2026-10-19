import { SignaturePad as SignaturePadPrimitive } from "@ark-ui/solid";
import type {
  SignaturePadClearTriggerProps,
  SignaturePadControlProps,
  SignaturePadGuideProps,
  SignaturePadRootProps as SignaturePadRootPrimitiveProps,
  SignaturePadSegmentProps,
} from "@ark-ui/solid";
import type {
  SignaturePadContract,
  SignaturePadRootContract,
} from "@pisagor/contracts";
import { signaturePadRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import {
  ArrowCounterClockwiseIcon,
  createSlotRecipeContext,
} from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "SignaturePad",
  recipe: signaturePadRecipe,
});
// #endregion

// #region Types
type SignaturePadRootProps = SignaturePadRootPrimitiveProps &
  SignaturePadRootContract;

export interface SignaturePadProps
  extends Omit<SignaturePadRootProps, "children">, SignaturePadContract {
  /**
   * Whether to show the clear button.
   *
   * @defaultValue true
   */
  clearable?: boolean;
  /** Marks the control as invalid for styling and assistive tech. */
  invalid?: boolean;
}
// #endregion

// #region Parts
const Root = withProvider<SignaturePadRootProps>(SignaturePadPrimitive.Root, {
  name: "Root",
});

const Control = withContext<SignaturePadControlProps>(
  SignaturePadPrimitive.Control,
  {
    name: "Control",
  },
);

const Segment = withContext<SignaturePadSegmentProps>(
  SignaturePadPrimitive.Segment,
  {
    name: "Segment",
  },
);

const ClearTrigger = withContext<SignaturePadClearTriggerProps>(
  SignaturePadPrimitive.ClearTrigger,
  { name: "ClearTrigger" },
);

const Guide = withContext<SignaturePadGuideProps>(SignaturePadPrimitive.Guide, {
  name: "Guide",
});
// #endregion

// #region Closed
function SignaturePadShorthand(props: SignaturePadProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "clearable",
    "invalid",
    "class",
    "classNames",
  ]);
  const invalid = () => local.invalid ?? false;
  const clearable = () => local.clearable ?? true;

  return (
    <Root
      {...rest}
      aria-invalid={invalid() || undefined}
      class={local.class}
      data-invalid={invalid() || undefined}
    >
      <Control
        class={local.classNames?.control}
        data-invalid={invalid() || undefined}
      >
        <Segment class={local.classNames?.segment} />
        <Show when={clearable()}>
          <ClearTrigger
            asChild={(triggerProps) => (
              <Button
                {...triggerProps()}
                aria-label={m("signaturePad.clearSignature")}
                size="icon-md"
                variant="ghost"
              >
                <ArrowCounterClockwiseIcon />
              </Button>
            )}
            class={local.classNames?.clearTrigger}
          />
        </Show>
        <Guide class={local.classNames?.guide} />
      </Control>
    </Root>
  );
}
// #endregion

export const SignaturePad = Object.assign(SignaturePadShorthand, {
  ClearTrigger,
  Control,
  Guide,
  Root,
  Segment,
});
