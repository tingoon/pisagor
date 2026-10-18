import type {
  KbdGroupProps as BaseKbdGroupProps,
  KbdProps as BaseKbdProps,
} from "@pisagor/props";
import { kbdGroupRecipe, kbdRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface KbdProps extends ComponentProps<"kbd">, BaseKbdProps {}

export interface KbdGroupProps
  extends ComponentProps<"div">, BaseKbdGroupProps {}

export function KbdRoot(props: KbdProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "class",
    "recipe",
    "size",
    "variant",
  ]);

  return (
    <kbd
      {...rest}
      class={(local.recipe ?? kbdRecipe)({
        class: local.class,
        size: local.size ?? "md",
        variant: local.variant,
      })}
      data-part="root"
      data-scope="kbd"
    />
  );
}

export function KbdGroup(props: KbdGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "recipe"]);

  return (
    <div
      {...rest}
      class={(local.recipe ?? kbdGroupRecipe)({ class: local.class })}
      data-part="group"
      data-scope="kbd"
    />
  );
}

export const Kbd = Object.assign(KbdRoot, {
  Group: KbdGroup,
});
