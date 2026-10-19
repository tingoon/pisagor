import type { KbdGroupRootContract, KbdRootContract } from "@pisagor/contracts";
import { kbdGroupRecipe, kbdRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface KbdProps extends ComponentProps<"kbd">, KbdRootContract {}

export interface KbdGroupProps
  extends ComponentProps<"div">, KbdGroupRootContract {}

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
