import {
  type AvatarFallbackProps,
  type AvatarImageProps,
  Avatar as AvatarPrimitive,
  type AvatarRootProps as AvatarPrimitiveRootProps,
} from "@ark-ui/react/avatar";
import type { AvatarProps as BaseAvatarRootProps } from "@pisagor/props";
import { type AvatarRecipeSlot, avatarRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../../internal/types";

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
}) as FunctionComponent<AvatarPrimitiveRootProps & BaseAvatarRootProps>;

const AvatarImage = withContext(AvatarPrimitive.Image, {
  name: "Image",
});

const AvatarFallback = withContext(AvatarPrimitive.Fallback, {
  name: "Fallback",
});
// #endregion

// #region Types
type AvatarClassNames = VariantClassNames<AvatarRecipeSlot>;

export interface AvatarProps
  extends Omit<ComponentProps<typeof AvatarRoot>, "children"> {
  /** Alt text for the avatar image */
  alt?: string;
  /** Renders the fallback content shown until the image loads */
  fallback?: ReactNode;
  /** Renders the avatar image with the provided src */
  src?: string;
  /** Slot class names */
  classNames?: AvatarClassNames;
  /** Extra props forwarded to the avatar fallback element */
  fallbackProps?: Omit<AvatarFallbackProps, "children" | "className">;
  /** Extra props forwarded to the avatar image element */
  imageProps?: Omit<AvatarImageProps, "alt" | "className" | "src">;
}
// #endregion

// #region Closed
export function Avatar({
  shape,
  size,
  alt,
  fallback,
  fallbackProps,
  imageProps,
  src,
  classNames,
  ...rest
}: AvatarProps) {
  return (
    <AvatarRoot {...rest} shape={shape} size={size}>
      {src && (
        <AvatarImage
          {...imageProps}
          alt={alt}
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
Avatar.displayName = "Avatar";
// #endregion
