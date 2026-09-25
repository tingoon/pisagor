import { ark } from "@ark-ui/solid/factory";
import { type ItemVariantProps, itemRecipe } from "@pisagor/recipes/item";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { ItemContext, useItem } from "./item.context";
import { useItemGroup } from "./item-group.context";

export interface ItemProps
  extends ComponentProps<typeof ark.div>,
    ItemVariantProps {
  recipe?: typeof itemRecipe;
}

export type ItemMediaProps = ComponentProps<typeof ark.div> & ItemVariantProps;
export type ItemHeaderProps = ComponentProps<typeof ark.div>;
export type ItemContentProps = ComponentProps<typeof ark.div>;
export type ItemTitleProps = ComponentProps<typeof ark.div>;
export type ItemDescriptionProps = ComponentProps<typeof ark.p>;
export type ItemActionsProps = ComponentProps<typeof ark.div>;
export type ItemFooterProps = ComponentProps<typeof ark.div>;

export function ItemRoot(props: ItemProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "children",
    "recipe",
    "class",
  ]);
  const group = useItemGroup();
  const variant = () => local.variant ?? group?.variant ?? "default";
  const slots = () => (local.recipe ?? itemRecipe)();

  return (
    <ItemContext value={{ slots: slots(), variant: variant() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class), variant: variant() })}
        data-part="root"
        data-scope="item"
        data-variant={variant()}
      >
        {local.children}
      </ark.div>
    </ItemContext>
  );
}

export function ItemMedia(props: ItemMediaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "class"]);
  const { slots } = useItem();
  const variant = () => local.variant ?? "default";

  return (
    <ark.div
      {...rest}
      class={slots.media({ class: cn(local.class), variant: variant() })}
      data-part="media"
      data-scope="item"
      data-variant={variant()}
    >
      {local.children}
    </ark.div>
  );
}

export function ItemContent(props: ItemContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      class={slots.content({ class: cn(local.class) })}
      data-part="content"
      data-scope="item"
    >
      {local.children}
    </ark.div>
  );
}

export function ItemTitle(props: ItemTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      class={slots.title({ class: cn(local.class) })}
      data-part="title"
      data-scope="item"
    >
      {local.children}
    </ark.div>
  );
}

export function ItemDescription(props: ItemDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useItem();

  return (
    <ark.p
      {...rest}
      class={slots.description({ class: cn(local.class) })}
      data-part="description"
      data-scope="item"
    >
      {local.children}
    </ark.p>
  );
}

export function ItemActions(props: ItemActionsProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      class={slots.actions({ class: cn(local.class) })}
      data-part="actions"
      data-scope="item"
    >
      {local.children}
    </ark.div>
  );
}

export function ItemHeader(props: ItemHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      class={slots.header({ class: cn(local.class) })}
      data-part="header"
      data-scope="item"
    >
      {local.children}
    </ark.div>
  );
}

export function ItemFooter(props: ItemFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useItem();

  return (
    <ark.div
      {...rest}
      class={slots.footer({ class: cn(local.class) })}
      data-part="footer"
      data-scope="item"
    >
      {local.children}
    </ark.div>
  );
}
