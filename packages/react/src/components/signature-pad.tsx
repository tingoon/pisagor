import { SignaturePad as SignaturePadPrimitive } from "@ark-ui/react";
import type {
  SignaturePadClearTriggerProps,
  SignaturePadControlProps,
  SignaturePadGuideProps,
  SignaturePadRootProps as SignaturePadRootPrimitiveProps,
  SignaturePadSegmentProps,
} from "@ark-ui/react";
import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";
import type {
  SignaturePadContract,
  SignaturePadRootContract,
} from "@pisagor/contracts";
import { signaturePadRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal";
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
function SignaturePadShorthand({
  clearable = true,
  invalid = false,
  className,
  classNames,
  ...rest
}: SignaturePadProps) {
  const { m } = useLocale();

  return (
    <Root
      {...rest}
      aria-invalid={invalid || undefined}
      className={className}
      data-invalid={invalid || undefined}
    >
      <Control
        className={classNames?.control}
        data-invalid={invalid || undefined}
      >
        <Segment className={classNames?.segment} />
        {clearable ? (
          <ClearTrigger asChild className={classNames?.clearTrigger}>
            <Button
              aria-label={m("signaturePad.clearSignature")}
              size="icon-md"
              variant="ghost"
            >
              <ArrowCounterClockwiseIcon />
            </Button>
          </ClearTrigger>
        ) : null}
        <Guide className={classNames?.guide} />
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
