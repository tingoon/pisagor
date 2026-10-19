import { Avatar as AvatarPrimitive } from "@ark-ui/solid";
import type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarRootProps as AvatarRootPrimitiveProps,
} from "@ark-ui/solid";
import type { AvatarContract, AvatarRootContract } from "@pisagor/contracts";
import { avatarRecipe } from "@pisagor/recipes";
import { getInitials } from "@pisagor/utils";
import type { Component, JSX, ComponentProps } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Avatar",
  recipe: avatarRecipe,
});
// #endregion

type AvatarRootProps = AvatarRootPrimitiveProps & AvatarRootContract;

export interface AvatarProps
  extends Omit<AvatarRootProps, "children">, AvatarContract {
  alt?: string;
  fallback?: JSX.Element;
  src?: string;
  fallbackProps?: Omit<AvatarFallbackProps, "children" | "class">;
  imageProps?: Omit<AvatarImageProps, "alt" | "class" | "src">;
}

const AvatarRoot: Component<AvatarRootProps> = withProvider<
  ComponentProps<typeof AvatarPrimitive.Root> & AvatarRootContract
>(AvatarPrimitive.Root, { name: "Root" });

const AvatarImage: Component<AvatarImageProps> = withContext<
  ComponentProps<typeof AvatarPrimitive.Image>
>(AvatarPrimitive.Image, { name: "Image" });

const AvatarFallback: Component<AvatarFallbackProps> = withContext<
  ComponentProps<typeof AvatarPrimitive.Fallback>
>(AvatarPrimitive.Fallback, { name: "Fallback" });

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
