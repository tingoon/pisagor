import {
  type SignaturePadDrawDetails,
  type SignaturePadDrawEndDetails,
  type SignaturePadDrawingOptions,
  SignaturePad as SignaturePadPrimitive,
} from "@ark-ui/vue/signature-pad";
import { PhArrowCounterClockwise } from "@phosphor-icons/vue";
import { formControlZoneRecipe } from "@pisagor/recipes/form-control";
import { type SignaturePadSlots, signaturePadRecipe } from "@pisagor/recipes/signature-pad";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { VariantClassNames } from "../../internal/types";
import { Button } from "../button";

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];

type SignaturePadClassNames = VariantClassNames<SignaturePadSlots>;

// #region Types
export interface SignaturePadProps {
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
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
}
// #endregion

// #region Part
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
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs }) {
    return () => {
      const slots_ = signaturePadRecipe();
      const resolved = {
        surfaceVariant: undefined,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const shellArgs = { variant: resolved.variant };
      const controlProps = { "data-variant": resolved.variant };

      return h(
        SignaturePadPrimitive.Root as ArkPart,
        {
          ...attrs,
          "aria-invalid": props.invalid || undefined,
          class: slots_.base({ class: props.class }),
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
            SignaturePadPrimitive.Control as ArkPart,
            {
              ...controlProps,
              class: cn(
                formControlZoneRecipe({ ...shellArgs }),
                slots_.control({
                  class: cn(
                    resolved.variant === "primary" && "shadow-xs/5",
                    props.classNames?.control,
                  ),
                }),
              ),
              "data-invalid": props.invalid || undefined,
            },
            () => [
              h(SignaturePadPrimitive.Segment as ArkPart, {
                class: slots_.segment({ class: props.classNames?.segment }),
              }),
              h(
                SignaturePadPrimitive.ClearTrigger as ArkPart,
                {
                  asChild: true,
                  class: slots_.clear({ class: props.classNames?.clear }),
                },
                () =>
                  h(
                    Button as ArkPart,
                    { "aria-label": "Clear signature", size: "icon-md", variant: "ghost" },
                    () => h(PhArrowCounterClockwise),
                  ),
              ),
              h(SignaturePadPrimitive.Guide as ArkPart, {
                class: slots_.guide({ class: props.classNames?.guide }),
              }),
            ],
          ),
      );
    };
  },
});
// #endregion
