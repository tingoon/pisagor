import { ark } from "@ark-ui/solid/factory";
import { linkBoxRecipe } from "@pisagor/recipes/link-box";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { LinkBoxContext, useLinkBox } from "./link-box.context";

export interface LinkBoxRootProps extends ComponentProps<typeof ark.div> {
  recipe?: typeof linkBoxRecipe;
}

export type LinkOverlayLinkProps = ComponentProps<typeof ark.a>;

export function LinkBoxRoot(props: LinkBoxRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? linkBoxRecipe)();

  return (
    <LinkBoxContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="root"
        data-scope="link-box"
      >
        {local.children}
      </ark.div>
    </LinkBoxContext>
  );
}

export function LinkOverlayLink(props: LinkOverlayLinkProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useLinkBox();

  return (
    <ark.a
      {...rest}
      class={slots.overlay({ class: cn(local.class) })}
      data-part="overlay"
      data-scope="link-box"
    />
  );
}
