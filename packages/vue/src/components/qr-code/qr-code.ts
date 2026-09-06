import { QrCode as QrCodePrimitive } from "@ark-ui/vue/qr-code";
import { qrCodeRecipe } from "@pisagor/recipes/qr-code";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export interface QrCodeRootProps {
  /**
   * Style recipe. Defaults to `qrCodeRecipe` from `@pisagor/recipes/qr-code`.
   *
   * @defaultValue qrCodeRecipe
   */
  recipe?: typeof qrCodeRecipe;
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const QrCodeRoot = defineComponent({
  inheritAttrs: false,
  name: "QrCodeRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: qrCodeRecipe,
      type: Function as PropType<typeof qrCodeRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        QrCodePrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
        },
        () => slots.default?.() ?? h(QrCodeFrame),
      );
    };
  },
});

export const QrCodeFrame = defineComponent({
  inheritAttrs: false,
  name: "QrCodeFrame",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: qrCodeRecipe,
      type: Function as PropType<typeof qrCodeRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        QrCodePrimitive.Frame as ArkPart,
        {
          ...attrs,
          class: variantSlots.frame({ class: props.class }),
        },
        () =>
          h(QrCodePrimitive.Pattern as ArkPart, {
            class: variantSlots.pattern(),
          }),
      );
    };
  },
});

export const QrCodeOverlay = defineComponent({
  inheritAttrs: false,
  name: "QrCodeOverlay",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: qrCodeRecipe,
      type: Function as PropType<typeof qrCodeRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        QrCodePrimitive.Overlay as ArkPart,
        {
          ...attrs,
          class: variantSlots.overlay({ class: props.class }),
        },
        slots.default?.(),
      );
    };
  },
});

export const QrCodeDownload = defineComponent({
  inheritAttrs: false,
  name: "QrCodeDownload",
  setup(_, { attrs, slots }) {
    return () => h(QrCodePrimitive.DownloadTrigger as ArkPart, { ...attrs }, slots);
  },
});
// #endregion
