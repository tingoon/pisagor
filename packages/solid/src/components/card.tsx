import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { CardProps as BaseCardRootProps } from "@pisagor/props";
import { type CardVariantProps, cardRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Card",
  recipe: cardRecipe,
});
// #endregion

// #region Types
export interface CardRootProps extends HTMLArkProps<"div">, BaseCardRootProps {}

export type CardMediaProps = ComponentProps<"div"> & CardVariantProps;

export interface CardHeaderProps extends Omit<ComponentProps<"div">, "title"> {
  description?: JSX.Element;
  title?: JSX.Element;
}

export type CardTitleProps = HTMLArkProps<"h3">;
export type CardDescriptionProps = ComponentProps<"p">;
export type CardActionProps = ComponentProps<"div">;
export type CardContentProps = ComponentProps<"div">;
export type CardFooterProps = ComponentProps<"div">;
// #endregion

// #region Parts
export const CardRoot: Component<CardRootProps> = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

/** Part-level `variant` stays on Media (not lifted to Root). */
export function CardMedia(props: CardMediaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  const styles = useStyles();
  const variant = () => local.variant ?? "default";

  return (
    <div
      {...rest}
      class={styles.slots.media({ class: local.class, variant: variant() })}
      data-part="media"
      data-scope="card"
      data-variant={variant()}
    />
  );
}

export const CardTitle = withContext(ark.h3, { name: "Title" });

export const CardDescription = withContext("p", { name: "Description" });

export const CardAction = withContext("div", { name: "Action" });

export const CardContent = withContext("div", { name: "Content" });

export const CardFooter = withContext("div", { name: "Footer" });

export function CardHeader(props: CardHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "description",
    "title",
    "class",
  ]);
  const styles = useStyles();

  return (
    <div
      {...rest}
      class={styles.slots.header({ class: local.class })}
      data-part="header"
      data-scope="card"
    >
      <Show when={local.title != null}>
        <CardTitle>{local.title}</CardTitle>
      </Show>
      <Show when={local.description != null}>
        <CardDescription>{local.description}</CardDescription>
      </Show>
      {local.children}
    </div>
  );
}
// #endregion

export const Card = Object.assign(CardRoot, {
  Action: CardAction,
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Media: CardMedia,
  Title: CardTitle,
});
