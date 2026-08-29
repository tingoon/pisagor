import { Avatar as AvatarPrimitive } from "@ark-ui/react/avatar";
import { type AvatarSlots, type AvatarVariantProps, avatarRecipe } from "@pisagor/recipes/avatar";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { AvatarContext, useAvatar } from "./avatar.context";

// #region Types
type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>;

type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback>;

type AvatarClassNames = VariantClassNames<AvatarSlots>;

type AvatarRootProps = ComponentProps<typeof AvatarPrimitive.Root> & AvatarVariantProps;

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
  className,
  ...rest
}: AvatarRootProps) {
  const slots = avatarRecipe({ shape, size });

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
