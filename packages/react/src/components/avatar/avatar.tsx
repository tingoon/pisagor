import { Avatar as AvatarPrimitive } from "@ark-ui/react/avatar";
import { avatarVariants } from "@pisagor/styles/ui/avatar";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Variants

// #endregion

// #region Types
type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>;

type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback>;

type AvatarRootProps = ComponentProps<typeof AvatarPrimitive.Root>;

type AvatarClassNames = VariantClassNames<typeof avatarVariants>;

type AvatarVariantProps = VariantProps<typeof avatarVariants>;

interface AvatarProps extends AvatarRootProps, AvatarVariantProps, WithTestId {
  /** Slot class names */
  classNames?: AvatarClassNames;
  /** Renders the avatar image with the provided src */
  src?: string;
  /** Alt text for the avatar image */
  alt?: string;
  /** Renders the fallback content shown until the image loads */
  fallback?: ReactNode;
  /** Extra props forwarded to the avatar image element */
  imageProps?: Omit<AvatarImageProps, "alt" | "className" | "src">;
  /** Extra props forwarded to the avatar fallback element */
  fallbackProps?: Omit<AvatarFallbackProps, "children" | "className">;
}
// #endregion

// #region Component
export function Avatar({
  size = "md",
  shape = "circle",
  className,
  classNames,
  src,
  alt,
  fallback,
  imageProps,
  fallbackProps,
  children,
  testId,
  ...rest
}: AvatarProps) {
  const slots = avatarVariants({ shape, size });

  return (
    <AvatarPrimitive.Root
      {...rest}
      className={cn(slots.root(), className, classNames?.root)}
      data-shape={shape}
      data-size={size}
      data-testid={testId}
    >
      {src && (
        <AvatarPrimitive.Image
          {...imageProps}
          alt={alt}
          className={cn(slots.image(), classNames?.image)}
          src={src}
        />
      )}
      {fallback !== undefined && (
        <AvatarPrimitive.Fallback
          {...fallbackProps}
          className={cn(slots.fallback(), classNames?.fallback)}
        >
          {fallback}
        </AvatarPrimitive.Fallback>
      )}
      {children}
    </AvatarPrimitive.Root>
  );
}
// #endregion
