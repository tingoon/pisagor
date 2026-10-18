import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { CardProps as BaseCardRootProps } from "@pisagor/props";
import { type CardVariantProps, cardRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
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

export type CardMediaProps = HTMLArkProps<"div"> & CardVariantProps;

export interface CardHeaderProps extends Omit<HTMLArkProps<"div">, "title"> {
  description?: JSX.Element;
  title?: JSX.Element;
}

export type CardTitleProps = HTMLArkProps<"h3">;
export type CardDescriptionProps = HTMLArkProps<"p">;
export type CardActionProps = HTMLArkProps<"div">;
export type CardContentProps = HTMLArkProps<"div">;
export type CardFooterProps = HTMLArkProps<"div">;
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
    <ark.div
      {...rest}
      class={styles.slots.media({ class: local.class, variant: variant() })}
      data-part="media"
      data-scope="card"
      data-variant={variant()}
    />
  );
}

export const CardTitle = withContext(ark.h3, { name: "Title" });

export const CardDescription = withContext(ark.p, { name: "Description" });

export const CardAction = withContext(ark.div, { name: "Action" });

export const CardContent = withContext(ark.div, { name: "Content" });

export const CardFooter = withContext(ark.div, { name: "Footer" });

export function CardHeader(props: CardHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "description",
    "title",
    "class",
  ]);
  const styles = useStyles();

  return (
    <ark.div
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
    </ark.div>
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
