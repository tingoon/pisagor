import { Avatar as AvatarPrimitive } from "@ark-ui/react";
import type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarRootProps as AvatarRootPrimitiveProps,
} from "@ark-ui/react";
import type { AvatarProps as BaseAvatarRootProps } from "@pisagor/props";
import { type AvatarRecipeSlot, avatarRecipe } from "@pisagor/recipes";
import { getInitials } from "@pisagor/utils";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
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

// #region Parts
const AvatarRoot = withProvider(AvatarPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<AvatarRootPrimitiveProps & BaseAvatarRootProps>;

const AvatarImage = withContext(AvatarPrimitive.Image, {
  name: "Image",
});

const AvatarFallback = withContext(AvatarPrimitive.Fallback, {
  name: "Fallback",
});
// #endregion

// #region Types
export interface AvatarProps extends Omit<
  ComponentProps<typeof AvatarRoot>,
  "children"
> {
  /** Alt text for the avatar image */
  alt?: string;
  /** Renders the fallback content shown until the image loads */
  fallback?: ReactNode;
  /**
   * Person name; used as default alt text and to derive initials when no
   * fallback is given
   */
  name?: string;
  /** Renders the avatar image with the provided src */
  src?: string;
  /** Slot class names */
  classNames?: VariantClassNames<AvatarRecipeSlot>;
  /** Extra props forwarded to the avatar fallback element */
  fallbackProps?: Omit<AvatarFallbackProps, "children" | "className">;
  /** Extra props forwarded to the avatar image element */
  imageProps?: Omit<AvatarImageProps, "alt" | "className" | "src">;
}
// #endregion

// #region Closed
function AvatarShorthand({
  shape,
  size,
  alt,
  fallback: fallbackProp,
  fallbackProps,
  imageProps,
  name,
  src,
  classNames,
  ...rest
}: AvatarProps) {
  const fallback =
    fallbackProp === undefined && name ? getInitials(name) : fallbackProp;

  return (
    <AvatarRoot {...rest} shape={shape} size={size}>
      {src && (
        <AvatarImage
          {...imageProps}
          alt={alt ?? name}
          className={classNames?.image}
          src={src}
        />
      )}

      {fallback !== undefined && (
        <AvatarFallback {...fallbackProps} className={classNames?.fallback}>
          {fallback}
        </AvatarFallback>
      )}
    </AvatarRoot>
  );
}
// #endregion

// #region Display Names
AvatarShorthand.displayName = "Avatar";
// #endregion

export const Avatar = Object.assign(AvatarShorthand, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Root: AvatarRoot,
});
