import { ark } from "@ark-ui/solid/factory";
import { type CardVariantProps, cardRecipe } from "@pisagor/recipes/card";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { CardContext, useCard } from "./card.context";

export interface CardRootProps extends ComponentProps<typeof ark.div> {
  recipe?: typeof cardRecipe;
}

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

export function CardRoot(props: CardRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? cardRecipe)();

  return (
    <CardContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="root"
        data-scope="card"
      >
        {local.children}
      </ark.div>
    </CardContext>
  );
}

export function CardMedia(props: CardMediaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  const { slots } = useCard();
  const variant = () => local.variant ?? "default";

  return (
    <ark.div
      {...rest}
      class={slots.media({ class: cn(local.class), variant: variant() })}
      data-part="media"
      data-scope="card"
      data-variant={variant()}
    />
  );
}

export function CardHeader(props: CardHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "description", "title", "class"]);
  const { slots } = useCard();

  return (
    <ark.div
      {...rest}
      class={slots.header({ class: cn(local.class) })}
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

export function CardTitle(props: CardTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCard();

  return (
    <ark.div
      {...rest}
      class={slots.title({ class: cn(local.class) })}
      data-part="title"
      data-scope="card"
    />
  );
}

export function CardDescription(props: CardDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCard();

  return (
    <ark.div
      {...rest}
      class={slots.description({ class: cn(local.class) })}
      data-part="description"
      data-scope="card"
    />
  );
}

export function CardAction(props: CardActionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCard();

  return (
    <ark.div
      {...rest}
      class={slots.action({ class: cn(local.class) })}
      data-part="action"
      data-scope="card"
    />
  );
}

export function CardContent(props: CardContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCard();

  return (
    <ark.div
      {...rest}
      class={slots.content({ class: cn(local.class) })}
      data-part="content"
      data-scope="card"
    />
  );
}

export function CardFooter(props: CardFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCard();

  return (
    <ark.div
      {...rest}
      class={slots.footer({ class: cn(local.class) })}
      data-part="footer"
      data-scope="card"
    />
  );
}
