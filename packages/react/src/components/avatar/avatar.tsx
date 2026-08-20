import { Avatar as AvatarPrimitive } from "@ark-ui/react/avatar";
import {
  type AvatarSlots,
  type AvatarVariantProps,
  avatarVariants,
} from "@pisagor/styles/ui/avatar";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { AvatarContext, useAvatar } from "./avatar.context";

// #region Types
type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>;

type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback>;

type AvatarClassNames = VariantClassNames<AvatarSlots>;

type AvatarRootProps = ComponentProps<typeof AvatarPrimitive.Root> &
  AvatarVariantProps &
  WithTestId;

export interface AvatarProps extends Omit<AvatarRootProps, "children"> {
  /** Renders the avatar image with the provided src */
  src?: string;
  /** Alt text for the avatar image */
  alt?: string;
  /** Renders the fallback content shown until the image loads */
  fallback?: ReactNode;
  /** Slot class names */
  classNames?: AvatarClassNames;
  /** Extra props forwarded to the avatar image element */
  imageProps?: Omit<AvatarImageProps, "alt" | "className" | "src">;
  /** Extra props forwarded to the avatar fallback element */
  fallbackProps?: Omit<AvatarFallbackProps, "children" | "className">;
}
// #endregion

// #region Parts
function AvatarRoot({
  children,
  className,
  shape = "circle",
  size = "md",
  testId,
  ...rest
}: AvatarRootProps) {
  const slots = avatarVariants({ shape, size });

  return (
    <AvatarContext value={{ slots }}>
      <AvatarPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-shape={shape}
        data-size={size}
        data-testid={testId}
      >
        {children}
      </AvatarPrimitive.Root>
    </AvatarContext>
  );
}
AvatarRoot.displayName = "Avatar.Root";

function AvatarImage({ className, ...rest }: AvatarImageProps) {
  const { slots } = useAvatar();

  return <AvatarPrimitive.Image {...rest} className={slots.image({ className })} />;
}
AvatarImage.displayName = "Avatar.Image";

function AvatarFallback({ className, ...rest }: AvatarFallbackProps) {
  const { slots } = useAvatar();

  return <AvatarPrimitive.Fallback {...rest} className={slots.fallback({ className })} />;
}
AvatarFallback.displayName = "Avatar.Fallback";
// #endregion

// #region Closed
export function Avatar({
  alt,
  classNames,
  fallback,
  fallbackProps,
  imageProps,
  shape,
  size,
  src,
  testId,
  ...rest
}: AvatarProps) {
  return (
    <AvatarRoot {...rest} shape={shape} size={size} testId={testId}>
      {src && <AvatarImage {...imageProps} alt={alt} className={classNames?.image} src={src} />}

      {fallback !== undefined && (
        <AvatarFallback {...fallbackProps} className={classNames?.fallback}>
          {fallback}
        </AvatarFallback>
      )}
    </AvatarRoot>
  );
}
Avatar.displayName = "Avatar";
// #endregion
