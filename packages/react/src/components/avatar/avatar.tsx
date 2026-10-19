import { Avatar as AvatarPrimitive } from "@ark-ui/react";
import type { AvatarFallbackProps, AvatarImageProps } from "@ark-ui/react";
import type { AvatarContract, AvatarRootContract } from "@pisagor/contracts";
import { avatarRecipe } from "@pisagor/recipes";
import { getInitials } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { createSlotRecipeContext } from "../../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Avatar",
  recipe: avatarRecipe,
});
// #endregion

// #region Parts
const AvatarRoot = withProvider(AvatarPrimitive.Root)<AvatarRootContract>({
  name: "Root",
  slot: "base",
});

const AvatarImage = withContext(AvatarPrimitive.Image, {
  name: "Image",
});

const AvatarFallback = withContext(AvatarPrimitive.Fallback, {
  name: "Fallback",
});
// #endregion

// #region Types
export type AvatarRootProps = ComponentProps<typeof AvatarRoot>;

export interface AvatarProps
  extends Omit<AvatarRootProps, "children">, AvatarContract {
  /** Alt text for the avatar image */
  alt?: string;
  fallback?: ReactNode;
  /** Renders the avatar image with the provided src */
  src?: string;
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
