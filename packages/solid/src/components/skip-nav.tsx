import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { SkipNavRootContract } from "@pisagor/contracts";
import { skipNavRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { useLocale } from "./provider/context";

const SKIP_NAV_ID = "skip-nav-content";

export interface SkipNavLinkProps
  extends HTMLArkProps<"a">, SkipNavRootContract {
  id?: string;
}

export interface SkipNavContentProps
  extends ComponentProps<"div">, SkipNavRootContract {
  id?: string;
}

export function SkipNavLink(props: SkipNavLinkProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "children",
    "id",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? skipNavRecipe)();
  const id = () => local.id ?? SKIP_NAV_ID;

  return (
    <ark.a
      {...rest}
      class={slots().link({ class: local.class })}
      data-part="link"
      data-scope="skip-nav"
      href={`#${id()}`}
    >
      {m("skipNav.label", local.children)}
    </ark.a>
  );
}

export function SkipNavContent(props: SkipNavContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["id", "recipe", "class"]);
  const slots = () => (local.recipe ?? skipNavRecipe)();

  return (
    <div
      {...rest}
      class={slots().content({ class: local.class })}
      data-part="content"
      data-scope="skip-nav"
      id={local.id ?? SKIP_NAV_ID}
      tabIndex={-1}
    />
  );
}

export const SkipNav = {
  Content: SkipNavContent,
  Link: SkipNavLink,
};
