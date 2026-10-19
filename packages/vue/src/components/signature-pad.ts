import { SignaturePad as SignaturePadPrimitive } from "@ark-ui/vue";
import type {
  SignaturePadClearTriggerProps,
  SignaturePadControlProps,
  SignaturePadDrawDetails,
  SignaturePadDrawEndDetails,
  SignaturePadDrawingOptions,
  SignaturePadGuideProps,
  SignaturePadRootProps as SignaturePadRootPrimitiveProps,
  SignaturePadSegmentProps,
} from "@ark-ui/vue";
import { PhArrowCounterClockwise } from "@phosphor-icons/vue";
import type {
  SignaturePadContract,
  SignaturePadRootContract,
} from "@pisagor/contracts";
import { signaturePadRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "SignaturePad",
  recipe: signaturePadRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

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

const Guide = withContext<SignaturePadGuideProps>(SignaturePadPrimitive.Guide, {
  name: "Guide",
});

const ClearTrigger = withContext<SignaturePadClearTriggerProps>(
  SignaturePadPrimitive.ClearTrigger,
  { name: "ClearTrigger" },
);
// #endregion

// #region Closed
const SignaturePadShorthand = defineComponent({
  inheritAttrs: false,
  name: "SignaturePad",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<SignaturePadProps["classNames"]>,
    },
    clearable: { default: true, type: Boolean },
    defaultPaths: {
      default: undefined,
      type: Array as PropType<string[] | undefined>,
    },
    disabled: { default: undefined, type: Boolean },
    drawing: {
      default: undefined,
      type: Object as PropType<SignaturePadDrawingOptions | undefined>,
    },
    invalid: { default: false, type: Boolean },
    name: { default: undefined, type: String },
    onDraw: {
      default: undefined,
      type: Function as PropType<(details: SignaturePadDrawDetails) => void>,
    },
    onDrawEnd: {
      default: undefined,
      type: Function as PropType<(details: SignaturePadDrawEndDetails) => void>,
    },
    paths: {
      default: undefined,
      type: Array as PropType<string[] | undefined>,
    },
    readOnly: { default: undefined, type: Boolean },
    required: { default: undefined, type: Boolean },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();

    return () =>
      h(
        Root,
        {
          ...attrs,
          "aria-invalid": props.invalid || undefined,
          class: props.class as string | undefined,
          "data-invalid": props.invalid || undefined,
          defaultPaths: props.defaultPaths,
          disabled: props.disabled,
          drawing: props.drawing,
          name: props.name,
          onDraw: props.onDraw,
          onDrawEnd: props.onDrawEnd,
          paths: props.paths,
          readOnly: props.readOnly,
          required: props.required,
        },
        () =>
          h(
            Control,
            {
              class: props.classNames?.control,
              "data-invalid": props.invalid || undefined,
            },
            () => [
              h(Segment, { class: props.classNames?.segment }),
              props.clearable
                ? h(
                    ClearTrigger,
                    { asChild: true, class: props.classNames?.clearTrigger },
                    () =>
                      h(
                        Button as ArkPart,
                        {
                          "aria-label": m("signaturePad.clearSignature"),
                          size: "icon-md",
                          variant: "ghost",
                        },
                        () => h(PhArrowCounterClockwise),
                      ),
                  )
                : null,
              h(Guide, { class: props.classNames?.guide }),
            ],
          ),
      );
  },
});
// #endregion

export const SignaturePad = Object.assign(SignaturePadShorthand, {
  ClearTrigger,
  Control,
  Guide,
  Root,
  Segment,
});
