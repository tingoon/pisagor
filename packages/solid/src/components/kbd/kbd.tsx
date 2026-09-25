import { ark } from "@ark-ui/solid/factory";
import {
  type KbdVariantProps,
  kbdGroupRecipe,
  kbdRecipe,
} from "@pisagor/recipes/kbd";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface KbdProps
  extends ComponentProps<typeof ark.kbd>,
    KbdVariantProps {
  recipe?: typeof kbdRecipe;
}

export interface KbdGroupProps extends ComponentProps<typeof ark.div> {
  recipe?: typeof kbdGroupRecipe;
}

export function Kbd(props: KbdProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "recipe", "variant"]);
  return (
    <ark.kbd
      {...rest}
      class={(local.recipe ?? kbdRecipe)({
        class: cn(local.class),
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
    <ark.div
      {...rest}
      class={(local.recipe ?? kbdGroupRecipe)({ class: cn(local.class) })}
      data-part="group"
      data-scope="kbd"
    />
  );
}
