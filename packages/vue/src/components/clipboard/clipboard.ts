import { Clipboard as ClipboardPrimitive } from "@ark-ui/vue/clipboard";
import { PhCheck, PhClipboard } from "@phosphor-icons/vue";
import {
  type ClipboardSlots,
  type ClipboardVariantProps,
  clipboardVariants,
} from "@pisagor/styles/ui/clipboard";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import {
  type FormControlVariant,
  formControlShellProps,
  formControlShellVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { Button, type ButtonProps } from "../button";

// #region Types
type ClipboardClassNames = VariantClassNames<ClipboardSlots>;

type ClipboardValueSize = ClipboardVariantProps["valueSize"];

export interface ClipboardProps extends WithTestId {
  /** Accessible label for icon-only copy buttons */
  buttonAriaLabel?: string;
  /**
   * Size of the copy button.
   *
   * @defaultValue "icon-md"
   */
  buttonSize?: ButtonProps["size"];
  /** Variant of the copy button */
  buttonVariant?: ButtonProps["variant"];
  class?: unknown;
  /** Slot class names */
  classNames?: ClipboardClassNames;
  /**
   * Visual shell variant for input/value display modes.
   * When omitted, resolves from the nearest `Surface` context.
   */
  controlVariant?: FormControlVariant;
  /** Icon shown after a successful copy */
  copiedIcon?: VNodeChild;
  /** Icon shown before copying */
  copyIcon?: VNodeChild;
  /**
   * The initial value to be copied to the clipboard when rendered.
   * Use when you don't need to control the value of the clipboard.
   */
  defaultValue?: string;
  /** The ids of the elements in the clipboard. Useful for composition. */
  ids?: Partial<{ input: string; label: string; root: string }>;
  /** Optional label rendered above the control. */
  label?: string;
  /** Extra props forwarded to the label element */
  labelProps?: Record<string, unknown>;
  /** The function to be called when the value is copied to the clipboard */
  onStatusChange?: (details: { copied: boolean }) => void;
  /** The function to be called when the value changes */
  onValueChange?: (details: { value: string }) => void;
  /**
   * The timeout for the copy operation
   *
   * @defaultValue 3000
   */
  timeout?: number;
  /** Specifies the localized strings that identifies the accessibility elements and their states */
  translations?: { triggerLabel?: (copied: boolean) => string };
  /**
   * The controlled value of the clipboard.
   */
  value?: string;
  /**
   * Size of the value text when `variant` is `"value"`.
   *
   * @defaultValue "md"
   */
  valueSize?: ClipboardValueSize;
  /**
   * Display mode for the copy control.
   *
   * @defaultValue "input"
   */
  variant?: "button" | "input" | "value";
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Part
export const Clipboard = defineComponent({
  inheritAttrs: false,
  name: "PisagorClipboard",
  props: {
    buttonAriaLabel: { default: "Copy to clipboard", type: String },
    buttonSize: { default: "icon-md", type: String as PropType<ButtonProps["size"]> },
    buttonVariant: { default: undefined, type: String as PropType<ButtonProps["variant"]> },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<ClipboardClassNames> },
    controlVariant: { default: undefined, type: String as PropType<FormControlVariant> },
    copiedIcon: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    copyIcon: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    defaultValue: { default: undefined, type: String },
    ids: { default: undefined, type: Object as PropType<ClipboardProps["ids"]> },
    label: { default: undefined, type: String },
    labelProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    onStatusChange: {
      default: undefined,
      type: Function as PropType<ClipboardProps["onStatusChange"]>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ClipboardProps["onValueChange"]>,
    },
    testId: String,
    timeout: { default: undefined, type: Number },
    translations: {
      default: undefined,
      type: Object as PropType<ClipboardProps["translations"]>,
    },
    value: { default: undefined, type: String },
    valueSize: { default: "md", type: String as PropType<ClipboardValueSize> },
    variant: { default: "input", type: String as PropType<ClipboardProps["variant"]> },
  },
  setup(props, { attrs }) {
    return () => {
      const resolved = useFormControlVariant(props.controlVariant);
      const shellArgs = shellVariantArgs(resolved);
      const controlProps = formControlShellProps(resolved);
      const shellClassName = formControlShellVariants({ size: "md", ...shellArgs });
      const slots_ = clipboardVariants({ valueSize: props.valueSize });

      const copiedIcon = props.copiedIcon ?? h(PhCheck);
      const copyIcon = props.copyIcon ?? h(PhClipboard);

      const control = h(
        ClipboardPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(props.class),
          "data-testid": props.testId,
          defaultValue: props.defaultValue,
          ids: props.ids,
          modelValue: props.value,
          onStatusChange: props.onStatusChange,
          onValueChange: props.onValueChange,
          timeout: props.timeout,
          translations: props.translations,
        },
        () =>
          h(
            ClipboardPrimitive.Control as ArkPart,
            {
              class: slots_.control({ class: props.classNames?.control }),
            },
            () => [
              props.variant === "input"
                ? h(ClipboardPrimitive.Input as ArkPart, {
                    ...controlProps,
                    class: cn(shellClassName, slots_.input({ class: props.classNames?.input })),
                    readOnly: true,
                  })
                : null,

              props.variant === "value"
                ? h(ClipboardPrimitive.ValueText as ArkPart, {
                    ...controlProps,
                    class: cn(shellClassName, slots_.value({ class: props.classNames?.value })),
                  })
                : null,

              h(ClipboardPrimitive.Trigger as ArkPart, { asChild: true }, () =>
                h(
                  Button,
                  {
                    "aria-label": props.buttonAriaLabel,
                    size: props.buttonSize,
                    type: "button",
                    variant: props.buttonVariant,
                  },
                  () =>
                    h(
                      ClipboardPrimitive.Indicator as ArkPart,
                      {
                        class: slots_.indicator({ class: props.classNames?.indicator }),
                      },
                      { copied: () => copiedIcon, default: () => copyIcon },
                    ),
                ),
              ),
            ],
          ),
      );

      if (!props.label) {
        return control;
      }

      return h("div", { class: slots_.field({ class: props.classNames?.field }) }, [
        h(
          "span",
          { ...props.labelProps, class: slots_.label({ class: props.classNames?.label }) },
          props.label,
        ),
        control,
      ]);
    };
  },
});
// #endregion
