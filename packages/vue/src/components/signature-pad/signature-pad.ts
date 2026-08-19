import {
  type SignaturePadDrawDetails,
  type SignaturePadDrawEndDetails,
  type SignaturePadDrawingOptions,
  SignaturePad as SignaturePadPrimitive,
} from "@ark-ui/vue/signature-pad";
import { PhArrowCounterClockwise } from "@phosphor-icons/vue";
import { signaturePadVariants } from "@pisagor/styles/ui/signature-pad";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import {
  type FormControlVariant,
  formControlShellProps,
  formControlZoneVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { Button } from "../button";

type ArkPart = Parameters<typeof h>[0];

type SignaturePadClassNames = VariantClassNames<typeof signaturePadVariants>;

// #region Types
export interface SignaturePadProps extends WithTestId {
  class?: unknown;
  /** Slot class names */
  classNames?: SignaturePadClassNames;
  /** The default paths of the signature pad. */
  defaultPaths?: string[];
  /** Whether the signature pad is disabled. */
  disabled?: boolean;
  /**
   * The drawing options.
   *
   * @default '{ size: 2, simulatePressure: true }'
   */
  drawing?: SignaturePadDrawingOptions;
  /** Marks the control as invalid for styling and assistive tech. */
  invalid?: boolean;
  /** The name of the signature pad. Useful for form submission. */
  name?: string;
  /**
   * Callback when the signature pad is drawing or the committed paths change.
   * `paths` contains only committed strokes; use `currentPath` for the in-progress stroke.
   */
  onDraw?: (details: SignaturePadDrawDetails) => void;
  /** Callback when the signature pad is done drawing. */
  onDrawEnd?: (details: SignaturePadDrawEndDetails) => void;
  /** The controlled paths of the signature pad. */
  paths?: string[];
  /** Whether the signature pad is read-only. */
  readOnly?: boolean;
  /** Whether the signature pad is required. */
  required?: boolean;
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
}
// #endregion

// #region Component
export const SignaturePad = defineComponent({
  inheritAttrs: false,
  name: "SignaturePad",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<SignaturePadClassNames> },
    defaultPaths: { default: undefined, type: Array as PropType<string[] | undefined> },
    disabled: { default: undefined, type: Boolean },
    drawing: {
      default: undefined,
      type: Object as PropType<SignaturePadDrawingOptions | undefined>,
    },
    invalid: { default: false, type: Boolean },
    name: { default: undefined, type: String },
    onDraw: { default: undefined, type: Function as PropType<SignaturePadProps["onDraw"]> },
    onDrawEnd: { default: undefined, type: Function as PropType<SignaturePadProps["onDrawEnd"]> },
    paths: { default: undefined, type: Array as PropType<string[] | undefined> },
    readOnly: { default: undefined, type: Boolean },
    required: { default: undefined, type: Boolean },
    testId: String,
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs }) {
    return () => {
      const slots_ = signaturePadVariants();
      const resolved = useFormControlVariant(props.variant);
      const shellArgs = shellVariantArgs(resolved);
      const controlProps = formControlShellProps(resolved);

      return h(FormControlVariantProvider as ArkPart, { value: props.variant }, () =>
        h(
          SignaturePadPrimitive.Root as ArkPart,
          {
            ...attrs,
            "aria-invalid": props.invalid || undefined,
            class: cn(slots_.root(), props.class, props.classNames?.root),
            "data-invalid": props.invalid || undefined,
            "data-testid": props.testId,
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
              SignaturePadPrimitive.Control as ArkPart,
              {
                ...controlProps,
                class: cn(
                  formControlZoneVariants({ ...shellArgs }),
                  slots_.control(),
                  resolved.variant === "primary" && "shadow-xs/5",
                  props.classNames?.control,
                ),
                "data-invalid": props.invalid || undefined,
              },
              () => [
                h(SignaturePadPrimitive.Segment as ArkPart, {
                  class: cn(slots_.segment(), props.classNames?.segment),
                }),
                h(
                  SignaturePadPrimitive.ClearTrigger as ArkPart,
                  {
                    asChild: true,
                    class: cn(slots_.clear(), props.classNames?.clear),
                  },
                  () =>
                    h(
                      Button as ArkPart,
                      { "aria-label": "Clear signature", size: "icon-md", variant: "ghost" },
                      () => h(PhArrowCounterClockwise),
                    ),
                ),
                h(SignaturePadPrimitive.Guide as ArkPart, {
                  class: cn(slots_.guide(), props.classNames?.guide),
                }),
              ],
            ),
        ),
      );
    };
  },
});
// #endregion
