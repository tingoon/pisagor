import { ark } from "@ark-ui/solid/factory";
import { skipNavRecipe } from "@pisagor/recipes/skip-nav";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

const SKIP_NAV_ID = "skip-nav-content";

export interface SkipNavLinkProps extends ComponentProps<typeof ark.a> {
  id?: string;
  recipe?: typeof skipNavRecipe;
}

export interface SkipNavContentProps extends ComponentProps<typeof ark.div> {
  id?: string;
  recipe?: typeof skipNavRecipe;
}

export function SkipNavLink(props: SkipNavLinkProps): JSX.Element {
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
      class={slots().link({ class: cn(local.class) })}
      data-part="link"
      data-scope="skip-nav"
      href={`#${id()}`}
    >
      {local.children ?? "Skip to content"}
    </ark.a>
  );
}

export function SkipNavContent(props: SkipNavContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["id", "recipe", "class"]);
  const slots = () => (local.recipe ?? skipNavRecipe)();

  return (
    <ark.div
      {...rest}
      class={slots().content({ class: cn(local.class) })}
      data-part="content"
      data-scope="skip-nav"
      id={local.id ?? SKIP_NAV_ID}
      tabIndex={-1}
    />
  );
}
