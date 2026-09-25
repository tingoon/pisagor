import {
  type AvatarFallbackProps,
  type AvatarImageProps,
  Avatar as AvatarPrimitive,
  type AvatarRootProps as AvatarPrimitiveRootProps,
} from "@ark-ui/solid/avatar";
import {
  type AvatarRecipeSlot,
  type AvatarVariantProps,
  avatarRecipe,
} from "@pisagor/recipes/avatar";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import type { VariantClassNames } from "../../internal/types";
import { AvatarContext, useAvatar } from "./avatar.context";

type AvatarClassNames = VariantClassNames<AvatarRecipeSlot>;

type AvatarRootProps = AvatarPrimitiveRootProps &
  AvatarVariantProps & {
    recipe?: typeof avatarRecipe;
  };

export interface AvatarProps extends Omit<AvatarRootProps, "children"> {
  alt?: string;
  fallback?: JSX.Element;
  src?: string;
  classNames?: AvatarClassNames;
  fallbackProps?: Omit<AvatarFallbackProps, "children" | "class">;
  imageProps?: Omit<AvatarImageProps, "alt" | "class" | "src">;
}

function AvatarRoot(props: AvatarRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["shape", "size", "children", "recipe", "class"]);
  const shape = () => local.shape ?? "circle";
  const size = () => local.size ?? "md";
  const slots = () => (local.recipe ?? avatarRecipe)({ shape: shape(), size: size() });

  return (
    <AvatarContext value={{ slots: slots() }}>
      <AvatarPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-shape={shape()}
        data-size={size()}
      >
        {local.children}
      </AvatarPrimitive.Root>
    </AvatarContext>
  );
}

function AvatarImage(props: AvatarImageProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useAvatar();
  return <AvatarPrimitive.Image {...rest} class={slots.image({ class: cn(local.class) })} />;
}

function AvatarFallback(props: AvatarFallbackProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useAvatar();
  return <AvatarPrimitive.Fallback {...rest} class={slots.fallback({ class: cn(local.class) })} />;
}

export function Avatar(props: AvatarProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "shape",
    "size",
    "alt",
    "fallback",
    "fallbackProps",
    "imageProps",
    "src",
    "classNames",
  ]);

  return (
    <AvatarRoot {...rest} shape={local.shape} size={local.size}>
      <Show when={local.src}>
        <AvatarImage
          {...local.imageProps}
          alt={local.alt}
          class={local.classNames?.image}
          src={local.src}
        />
      </Show>
      <Show when={local.fallback !== undefined}>
        <AvatarFallback {...local.fallbackProps} class={local.classNames?.fallback}>
          {local.fallback}
        </AvatarFallback>
      </Show>
    </AvatarRoot>
  );
}
