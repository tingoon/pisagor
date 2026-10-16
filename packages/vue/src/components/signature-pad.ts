import {
  type SignaturePadDrawDetails,
  type SignaturePadDrawEndDetails,
  type SignaturePadDrawingOptions,
  SignaturePad as SignaturePadPrimitive,
} from "@ark-ui/vue/signature-pad";
import { PhArrowCounterClockwise } from "@phosphor-icons/vue";
import type { SignaturePadProps as BaseSignaturePadProps } from "@pisagor/props";
import {
  formControlZoneRecipe,
  type SignaturePadRecipeSlot,
  signaturePadRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import {
  defineComponent,
  h,
  type InjectionKey,
  inject,
  type PropType,
  provide,
} from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { ClassValue, VariantClassNames } from "../internal/types";
import { Button } from "./button";
import { useTranslation } from "./provider/context";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: SignaturePadStylesContext, useStyles: useSignaturePadStyles } =
  createSlotRecipeContext({
    name: "SignaturePad",
    recipe: signaturePadRecipe,
  });
// #endregion

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];

type SignaturePadClassNames = VariantClassNames<SignaturePadRecipeSlot>;

// #region Types
export interface SignaturePadProps extends BaseSignaturePadProps {
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
   * @default "{ size: 2, simulatePressure: true }"
   */
  drawing?: SignaturePadDrawingOptions;
  /** Marks the control as invalid for styling and assistive tech. */
  invalid?: boolean;
  /** The name of the signature pad. Useful for form submission. */
  name?: string;
  /**
   * Callback when the signature pad is drawing or the committed paths change.
   * `paths` contains only committed strokes; use `currentPath` for the
   * in-progress stroke.
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

// #region Parts
const SignaturePadVariantKey: InjectionKey<() => FormControlVariant> = Symbol(
  "SignaturePadVariant",
);

const classProp = {
  default: undefined,
  type: [String, Object, Array] as PropType<ClassValue>,
};

const SignaturePadRoot = defineComponent({
  inheritAttrs: false,
  name: "SignaturePad.Root",
  props: {
    class: classProp,
    recipe: {
      default: signaturePadRecipe,
      type: Function as PropType<typeof signaturePadRecipe>,
    },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs, slots }) {
    provide(SignaturePadVariantKey, () => props.variant ?? "primary");

    return () => {
      const styles = props.recipe();

      return h(
        SignaturePadStylesContext,
        { value: { slots: styles, variants: {} } },
        () =>
          h(
            SignaturePadPrimitive.Root as ArkPart,
            { ...attrs, class: styles.base({ class: props.class }) },
            slots,
          ),
      );
    };
  },
});

const SignaturePadControl = defineComponent({
  inheritAttrs: false,
  name: "SignaturePad.Control",
  props: { class: classProp },
  setup(props, { attrs, slots }) {
    const styles = useSignaturePadStyles();
    const surfaceVariant = useFormControlSurface();
    const variant = inject(SignaturePadVariantKey, () => "primary" as const);

    return () =>
      h(
        SignaturePadPrimitive.Control as ArkPart,
        {
          ...attrs,
          class: cn(
            formControlZoneRecipe({ surfaceVariant, variant: variant() }),
            styles.slots.control({
              class: props.class as string | undefined,
              variant: variant(),
            }),
          ),
          "data-variant": variant(),
        },
        slots,
      );
  },
});

const SignaturePadSegment = defineComponent({
  inheritAttrs: false,
  name: "SignaturePad.Segment",
  props: { class: classProp },
  setup(props, { attrs }) {
    const styles = useSignaturePadStyles();

    return () =>
      h(SignaturePadPrimitive.Segment as ArkPart, {
        ...attrs,
        class: styles.slots.segment({
          class: props.class as string | undefined,
        }),
      });
  },
});

const SignaturePadGuide = defineComponent({
  inheritAttrs: false,
  name: "SignaturePad.Guide",
  props: { class: classProp },
  setup(props, { attrs, slots }) {
    const styles = useSignaturePadStyles();

    return () =>
      h(
        SignaturePadPrimitive.Guide as ArkPart,
        {
          ...attrs,
          class: styles.slots.guide({
            class: props.class as string | undefined,
          }),
        },
        slots,
      );
  },
});

const SignaturePadClear = defineComponent({
  inheritAttrs: false,
  name: "SignaturePad.Clear",
  props: { class: classProp },
  setup(props, { attrs, slots }) {
    const styles = useSignaturePadStyles();
    const label = useTranslation("signaturePad.clearSignature");

    return () =>
      h(
        SignaturePadPrimitive.ClearTrigger as ArkPart,
        {
          ...attrs,
          asChild: true,
          class: styles.slots.clear({
            class: props.class as string | undefined,
          }),
        },
        () =>
          h(
            Button as ArkPart,
            { "aria-label": label, size: "icon-md", variant: "ghost" },
            () => slots.default?.() ?? h(PhArrowCounterClockwise),
          ),
      );
  },
});
// #endregion

// #region Component
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
      type: Object as PropType<SignaturePadClassNames>,
    },
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
      type: Function as PropType<SignaturePadProps["onDraw"]>,
    },
    onDrawEnd: {
      default: undefined,
      type: Function as PropType<SignaturePadProps["onDrawEnd"]>,
    },
    paths: {
      default: undefined,
      type: Array as PropType<string[] | undefined>,
    },
    readOnly: { default: undefined, type: Boolean },
    recipe: {
      default: signaturePadRecipe,
      type: Function as PropType<typeof signaturePadRecipe>,
    },
    required: { default: undefined, type: Boolean },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs }) {
    const surfaceVariant = useFormControlSurface();

    return () => {
      const slots_ = props.recipe();
      const resolved = {
        surfaceVariant,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const shellArgs = {
        surfaceVariant: resolved.surfaceVariant,
        variant: resolved.variant,
      };
      const controlProps = { "data-variant": resolved.variant };

      return h(
        SignaturePadStylesContext,
        { value: { slots: slots_, variants: {} } },
        () =>
          h(
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
                      class: props.classNames?.control,
                      variant: resolved.variant,
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
                        {
                          "aria-label": useTranslation(
                            "signaturePad.clearSignature",
                          ),
                          size: "icon-md",
                          variant: "ghost",
                        },
                        () => h(PhArrowCounterClockwise),
                      ),
                  ),
                  h(SignaturePadPrimitive.Guide as ArkPart, {
                    class: slots_.guide({ class: props.classNames?.guide }),
                  }),
                ],
              ),
          ),
      );
    };
  },
});
// #endregion

export const SignaturePad = Object.assign(SignaturePadShorthand, {
  Clear: SignaturePadClear,
  Control: SignaturePadControl,
  Guide: SignaturePadGuide,
  Root: SignaturePadRoot,
  Segment: SignaturePadSegment,
});
