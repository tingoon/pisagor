import {
  type AvatarFallbackProps,
  type AvatarImageProps,
  Avatar as AvatarPrimitive,
  type AvatarRootProps as AvatarPrimitiveRootProps,
} from "@ark-ui/react/avatar";
import {
  type AvatarRecipeSlot,
  type AvatarVariantProps,
  avatarRecipe,
} from "@pisagor/recipes/avatar";
import type { ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { AvatarContext, useAvatar } from "./avatar.context";

// #region Types
type AvatarClassNames = VariantClassNames<AvatarRecipeSlot>;

type AvatarRootProps = AvatarPrimitiveRootProps &
  AvatarVariantProps & {
    /**
     * Style recipe. Defaults to `avatarRecipe` from `@pisagor/recipes/avatar`.
     *
     * @defaultValue avatarRecipe
     */
    recipe?: typeof avatarRecipe;
  };

export interface AvatarProps extends Omit<AvatarRootProps, "children"> {
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

// #region Parts
function AvatarRoot({
  shape = "circle",
  size = "md",
  children,
  recipe = avatarRecipe,
  className,
  ...rest
}: AvatarRootProps) {
  const slots = recipe({ shape, size });

  return (
    <AvatarContext value={{ slots }}>
      <AvatarPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-shape={shape}
        data-size={size}
      >
        {children}
      </AvatarPrimitive.Root>
    </AvatarContext>
  );
}

function AvatarImage({ className, ...rest }: AvatarImageProps) {
  const { slots } = useAvatar();

  return <AvatarPrimitive.Image {...rest} className={slots.image({ className })} />;
}

function AvatarFallback({ className, ...rest }: AvatarFallbackProps) {
  const { slots } = useAvatar();

  return <AvatarPrimitive.Fallback {...rest} className={slots.fallback({ className })} />;
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
      {src && <AvatarImage {...imageProps} alt={alt} className={classNames?.image} src={src} />}

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
AvatarRoot.displayName = "Avatar.Root";
AvatarImage.displayName = "Avatar.Image";
AvatarFallback.displayName = "Avatar.Fallback";
Avatar.displayName = "Avatar";
// #endregion
