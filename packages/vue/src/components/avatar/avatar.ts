import { AvatarFallback, AvatarImage, AvatarRoot } from "@ark-ui/vue/avatar";
import {
  type AvatarRecipeSlot,
  type AvatarVariantProps,
  avatarRecipe,
} from "@pisagor/recipes/avatar";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { VariantClassNames } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export type AvatarShape = NonNullable<AvatarVariantProps["shape"]>;
export type AvatarSize = NonNullable<AvatarVariantProps["size"]>;

export type AvatarClassNames = VariantClassNames<AvatarRecipeSlot>;

export interface AvatarProps extends AvatarVariantProps {
  /** Slot class names */
  classNames?: AvatarClassNames;
  /** Renders the avatar image with the provided src */
  src?: string;
  /** Alt text for the avatar image */
  alt?: string;
  /** Renders the fallback content shown until the image loads */
  fallback?: VNodeChild;
  /** Extra props forwarded to the avatar image element */
  imageProps?: Record<string, unknown>;
  /** Extra props forwarded to the avatar fallback element */
  fallbackProps?: Record<string, unknown>;
  class?: unknown;
}
// #endregion

// #region Component
export const Avatar = defineComponent({
  inheritAttrs: false,
  name: "PisagorAvatar",
  props: {
    alt: { default: undefined, type: String },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<AvatarClassNames> },
    fallback: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild>,
    },
    fallbackProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown> | undefined>,
    },
    imageProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown> | undefined>,
    },
    shape: { default: "circle", type: String as PropType<AvatarShape> },
    size: { default: "md", type: String as PropType<AvatarSize> },
    src: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots_ = avatarRecipe({ shape: props.shape, size: props.size });

      return h(
        AvatarRoot as ArkPart,
        {
          ...attrs,
          class: slots_.base({ class: props.class }),
          "data-shape": props.shape,
          "data-size": props.size,
        },
        () => [
          props.src
            ? h(AvatarImage as ArkPart, {
                ...(props.imageProps ?? {}),
                alt: props.alt,
                class: slots_.image({ class: props.classNames?.image }),
                src: props.src,
              })
            : null,
          props.fallback !== undefined
            ? h(
                AvatarFallback as ArkPart,
                {
                  ...(props.fallbackProps ?? {}),
                  class: slots_.fallback({ class: props.classNames?.fallback }),
                },
                () => props.fallback,
              )
            : null,
          slots.default?.(),
        ],
      );
    };
  },
});
// #endregion
