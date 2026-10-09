import { ark } from "@ark-ui/solid/factory";
import type { CardProps as BaseCardRootProps } from "@pisagor/props";
import { type CardVariantProps, cardRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useCard,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Card",
  recipe: cardRecipe,
});
// #endregion

// #region Types
export interface CardRootProps
  extends ComponentProps<typeof ark.div>,
    BaseCardRootProps {}

export type CardMediaProps = ComponentProps<typeof ark.div> & CardVariantProps;

export interface CardHeaderProps extends ComponentProps<typeof ark.div> {
  description?: string;
  title?: string;
}

export type CardTitleProps = ComponentProps<typeof ark.div>;
export type CardDescriptionProps = ComponentProps<typeof ark.div>;
export type CardActionProps = ComponentProps<typeof ark.div>;
export type CardContentProps = ComponentProps<typeof ark.div>;
export type CardFooterProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export const CardRoot: Component<CardRootProps> = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

/** Part-level `variant` stays on Media (not lifted to Root). */
export function CardMedia(props: CardMediaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  const styles = useCard();
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

export const CardTitle = withContext(ark.div, { name: "Title" });

export const CardDescription = withContext(ark.div, { name: "Description" });

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
  const styles = useCard();

  return (
    <ark.div
      {...rest}
      class={styles.slots.header({ class: local.class })}
      data-part="header"
      data-scope="card"
    >
      <Show when={local.title}>
        <CardTitle>{local.title}</CardTitle>
      </Show>
      <Show when={local.description}>
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
