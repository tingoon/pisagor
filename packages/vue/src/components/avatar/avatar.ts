import {
  AvatarFallback as AvatarFallbackPrimitive,
  AvatarImage as AvatarImagePrimitive,
  AvatarRoot as AvatarRootPrimitive,
} from "@ark-ui/vue";
import type { AvatarContract, AvatarRootContract } from "@pisagor/contracts";
import { type AvatarVariantProps, avatarRecipe } from "@pisagor/recipes";
import { getInitials } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Avatar",
  recipe: avatarRecipe,
});
// #endregion

// #region Parts
const AvatarRoot = withProvider<AvatarRootContract>(AvatarRootPrimitive, {
  name: "Root",
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

export interface AvatarProps extends AvatarRootContract, AvatarContract {
  /** Renders the avatar image with the provided src */
  src?: string;
  /** Alt text for the avatar image */
  alt?: string;
  fallback?: VNodeChild;
  /** Extra props forwarded to the avatar image element */
  imageProps?: Record<string, unknown>;
  /** Extra props forwarded to the avatar fallback element */
  fallbackProps?: Record<string, unknown>;
  class?: unknown;
}
// #endregion

// #region Closed
const AvatarShorthand = defineComponent({
  inheritAttrs: false,
  name: "Avatar",
  props: {
    alt: { default: undefined, type: String },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<AvatarProps["classNames"]>,
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
    name: { default: undefined, type: String },
    shape: { default: "circle", type: String as PropType<AvatarShape> },
    size: { default: "md", type: String as PropType<AvatarSize> },
    src: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const fallback =
        props.fallback === undefined && props.name
          ? getInitials(props.name)
          : props.fallback;

      return h(
        AvatarRoot,
        { ...attrs, class: props.class, shape: props.shape, size: props.size },
        () => [
          props.src
            ? h(AvatarImage, {
                ...(props.imageProps ?? {}),
                alt: props.alt ?? props.name,
                class: props.classNames?.image,
                src: props.src,
              })
            : null,
          fallback !== undefined
            ? h(
                AvatarFallback,
                {
                  ...(props.fallbackProps ?? {}),
                  class: props.classNames?.fallback,
                },
                () => fallback,
              )
            : null,
          slots.default?.(),
        ],
      );
    };
  },
});
// #endregion

export const Avatar = Object.assign(AvatarShorthand, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Root: AvatarRoot,
});
