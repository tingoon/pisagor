import { Clipboard as ClipboardPrimitive } from "@ark-ui/vue";
import type { ClipboardRootProps as ClipboardRootPrimitiveProps } from "@ark-ui/vue";
import { PhCheck, PhClipboard } from "@phosphor-icons/vue";
import type {
  ClipboardContract,
  ClipboardRootContract,
} from "@pisagor/contracts";
import { clipboardRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { useLocale } from "./provider/context";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context, withContext } = createSlotRecipeContext({
  name: "Clipboard",
  recipe: clipboardRecipe,
});
// #endregion

// #region Types
type ClipboardRootProps = ClipboardRootPrimitiveProps & ClipboardRootContract;

export interface ClipboardProps
  extends
    Omit<ClipboardRootProps, "children" | "variant">,
    Omit<ClipboardRootContract, "variant">,
    ClipboardContract {
  copiedIcon?: VNodeChild;
  copyIcon?: VNodeChild;
  label?: VNodeChild;
  /** Extra props forwarded to the label element */
  labelProps?: Record<string, unknown>;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const Root = defineComponent({
  inheritAttrs: false,
  name: "Clipboard.Root",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    recipe: {
      default: clipboardRecipe,
      type: Function as PropType<typeof clipboardRecipe>,
    },
    size: {
      default: "md",
      type: String as PropType<ClipboardRootContract["size"]>,
    },
    surfaceVariant: {
      default: undefined,
      type: String as PropType<ClipboardRootContract["surfaceVariant"]>,
    },
    valueSize: {
      default: undefined,
      type: String as PropType<ClipboardRootContract["valueSize"]>,
    },
    variant: {
      default: undefined,
      type: String as PropType<ClipboardRootContract["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const surfaceFromContext = useFormControlSurface();

    return () => {
      const resolved = {
        size: props.size,
        surfaceVariant: props.surfaceVariant ?? surfaceFromContext,
        valueSize: props.valueSize ?? props.size,
        variant: props.variant,
      };
      const recipeSlots = props.recipe(resolved);

      return h(
        Context,
        { value: { slots: recipeSlots, variants: resolved as never } },
        () =>
          h(
            ClipboardPrimitive.Root as ArkPart,
            {
              ...attrs,
              class: props.class,
            },
            slots,
          ),
      );
    };
  },
});

const Control = withContext(ClipboardPrimitive.Control as ArkPart, {
  name: "Control",
});

const Input = withContext(ClipboardPrimitive.Input as ArkPart, {
  name: "Input",
});

const ValueText = withContext(ClipboardPrimitive.ValueText as ArkPart, {
  name: "ValueText",
});

const Indicator = withContext(ClipboardPrimitive.Indicator as ArkPart, {
  name: "Indicator",
});

const Field = withContext("div", {
  name: "Field",
});

const Label = withContext(ClipboardPrimitive.Label, {
  name: "Label",
});
// #endregion

// #region Closed
const ClipboardShorthand = defineComponent({
  inheritAttrs: false,
  name: "Clipboard",
  props: {
    buttonAriaLabel: { default: undefined, type: String },
    buttonSize: {
      default: undefined,
      type: String as PropType<ButtonProps["size"]>,
    },
    buttonVariant: {
      default: undefined,
      type: String as PropType<ButtonProps["variant"]>,
    },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<ClipboardProps["classNames"]>,
    },
    controlVariant: {
      default: undefined,
      type: String as PropType<ClipboardRootContract["variant"]>,
    },
    copiedIcon: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    copyIcon: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    label: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    labelProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    recipe: {
      default: undefined,
      type: Function as PropType<typeof clipboardRecipe>,
    },
    size: {
      default: "md",
      type: String as PropType<"sm" | "md" | "lg">,
    },
    valueSize: {
      default: undefined,
      type: String as PropType<ClipboardRootContract["valueSize"]>,
    },
    variant: {
      default: "input",
      type: String as PropType<ClipboardContract["variant"]>,
    },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();

    return () => {
      const buttonAriaLabel = m("clipboard.copy", props.buttonAriaLabel);
      const buttonSize =
        props.buttonSize ??
        (`icon-${props.size ?? "md"}` as ButtonProps["size"]);
      const copiedIcon = props.copiedIcon ?? h(PhCheck);
      const copyIcon = props.copyIcon ?? h(PhClipboard);
      const displayVariant = props.variant ?? "input";

      const control = () =>
        h(Control, { class: props.classNames?.control }, () => [
          displayVariant === "input"
            ? h(Input, {
                class: props.classNames?.input,
                readOnly: true,
              })
            : null,

          displayVariant === "value"
            ? h(ValueText, { class: props.classNames?.valueText })
            : null,

          h(ClipboardPrimitive.Trigger as ArkPart, { asChild: true }, () =>
            h(
              Button,
              {
                "aria-label": buttonAriaLabel,
                size: buttonSize,
                type: "button",
                variant: props.buttonVariant,
              },
              () =>
                h(
                  Indicator,
                  { class: props.classNames?.indicator },
                  {
                    copied: () => copiedIcon,
                    default: () => copyIcon,
                  },
                ),
            ),
          ),
        ]);

      return h(
        Root,
        {
          ...attrs,
          class: props.class,
          recipe: props.recipe,
          size: props.size,
          valueSize: props.valueSize ?? props.size,
          variant: props.controlVariant,
        },
        () =>
          props.label
            ? h(Field, { class: props.classNames?.field }, () => [
                h(
                  Label,
                  {
                    ...props.labelProps,
                    class: props.classNames?.label,
                  },
                  () => props.label,
                ),
                control(),
              ])
            : control(),
      );
    };
  },
});
// #endregion

export const Clipboard = Object.assign(ClipboardShorthand, {
  Control,
  Field,
  Indicator,
  Input,
  Label,
  Root,
  ValueText,
});
