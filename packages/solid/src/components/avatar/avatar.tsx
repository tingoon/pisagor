import {
  Avatar as AvatarPrimitive,
  type AvatarFallbackProps,
  type AvatarImageProps,
  type AvatarRootProps as AvatarPrimitiveRootProps,
} from "@ark-ui/solid";
import type { AvatarProps as BaseAvatarRootProps } from "@pisagor/props";
import {
  type AvatarRecipeSlot,
  type AvatarVariantProps,
  avatarRecipe,
} from "@pisagor/recipes";
import { getInitials } from "@pisagor/utils";
import type { Component, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import {
  type VariantClassNames,
  createSlotRecipeContext,
} from "../../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Avatar",
  recipe: avatarRecipe,
});
// #endregion

type AvatarClassNames = VariantClassNames<AvatarRecipeSlot>;

type AvatarRootProps = AvatarPrimitiveRootProps &
  AvatarVariantProps &
  BaseAvatarRootProps;

export interface AvatarProps extends Omit<AvatarRootProps, "children"> {
  alt?: string;
  fallback?: JSX.Element;
  /**
   * Person name; used as default alt text and to derive initials when no
   * fallback is given
   */
  name?: string;
  src?: string;
  classNames?: AvatarClassNames;
  fallbackProps?: Omit<AvatarFallbackProps, "children" | "class">;
  imageProps?: Omit<AvatarImageProps, "alt" | "class" | "src">;
}

const AvatarRoot: Component<AvatarRootProps> = withProvider(
  AvatarPrimitive.Root,
  { name: "Root", slot: "base" },
);

const AvatarImage: Component<AvatarImageProps> = withContext(
  AvatarPrimitive.Image,
  { name: "Image" },
);

const AvatarFallback: Component<AvatarFallbackProps> = withContext(
  AvatarPrimitive.Fallback,
  { name: "Fallback" },
);

function AvatarShorthand(props: AvatarProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "name",
    "shape",
    "size",
    "alt",
    "fallback",
    "fallbackProps",
    "imageProps",
    "src",
    "classNames",
  ]);
  const fallback = () =>
    local.fallback === undefined && local.name
      ? getInitials(local.name)
      : local.fallback;

  return (
    <AvatarRoot {...rest} shape={local.shape} size={local.size}>
      <Show when={local.src}>
        <AvatarImage
          {...local.imageProps}
          alt={local.alt ?? local.name}
          class={local.classNames?.image}
          src={local.src}
        />
      </Show>
      <Show when={fallback() !== undefined}>
        <AvatarFallback
          {...local.fallbackProps}
          class={local.classNames?.fallback}
        >
          {fallback()}
        </AvatarFallback>
      </Show>
    </AvatarRoot>
  );
}

export const Avatar = Object.assign(AvatarShorthand, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Root: AvatarRoot,
});
