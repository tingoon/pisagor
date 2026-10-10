import {
  AvatarFallback as AvatarFallbackPrimitive,
  AvatarImage as AvatarImagePrimitive,
  AvatarRoot as AvatarRootPrimitive,
} from "@ark-ui/vue/avatar";
import type { AvatarProps as BaseAvatarProps } from "@pisagor/props";
import {
  type AvatarRecipeSlot,
  type AvatarVariantProps,
  avatarRecipe,
} from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Avatar",
  recipe: avatarRecipe,
});
// #endregion

// #region Parts
const AvatarRoot = withProvider(AvatarRootPrimitive, {
  name: "Root",
  slot: "base",
});

const AvatarImage = withContext(AvatarImagePrimitive, {
  name: "Image",
});

const AvatarFallback = withContext(AvatarFallbackPrimitive, {
  name: "Fallback",
});
// #endregion

// #region Types
export type AvatarShape = NonNullable<AvatarVariantProps["shape"]>;
export type AvatarSize = NonNullable<AvatarVariantProps["size"]>;

export type AvatarClassNames = VariantClassNames<AvatarRecipeSlot>;

export interface AvatarProps extends BaseAvatarProps {
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

// #region Closed
export const Avatar = defineComponent({
  inheritAttrs: false,
  name: "Avatar",
  props: {
    alt: { default: undefined, type: String },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<AvatarClassNames>,
    },
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
    return () =>
      h(
        AvatarRoot,
        { ...attrs, class: props.class, shape: props.shape, size: props.size },
        () => [
          props.src
            ? h(AvatarImage, {
                ...(props.imageProps ?? {}),
                alt: props.alt,
                class: props.classNames?.image,
                src: props.src,
              })
            : null,
          props.fallback !== undefined
            ? h(
                AvatarFallback,
                {
                  ...(props.fallbackProps ?? {}),
                  class: props.classNames?.fallback,
                },
                () => props.fallback,
              )
            : null,
          slots.default?.(),
        ],
      );
  },
});
// #endregion
