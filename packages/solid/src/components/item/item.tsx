import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { ItemProps as BaseItemProps } from "@pisagor/props";
import { type ItemVariantProps, itemRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../../internal";
import { useItemGroup } from "./item-group.context";

// #region Context
const {
  Context: ItemStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({ name: "Item", recipe: itemRecipe });
// #endregion

export interface ItemProps extends HTMLArkProps<"div">, BaseItemProps {}

export type ItemMediaProps = ComponentProps<"div"> & ItemVariantProps;
export type ItemHeaderProps = ComponentProps<"div">;
export type ItemContentProps = ComponentProps<"div">;
export type ItemTitleProps = ComponentProps<"div">;
export type ItemDescriptionProps = ComponentProps<"p">;
export type ItemActionsProps = ComponentProps<"div">;
export type ItemFooterProps = ComponentProps<"div">;

/** Inherits `variant` from the nearest ItemGroup when not set. */
export function ItemRoot(props: ItemProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "recipe",
    "size",
    "class",
  ]);
  const group = useItemGroup();
  const variant = () => local.variant ?? group?.variant ?? "default";
  const resolved = () => ({
    ...itemRecipe.defaultVariants,
    ...local.recipe?.defaultVariants,
    variant: variant(),
    ...(local.size ? { size: local.size } : {}),
  });
  const slots = createMemo(() => (local.recipe ?? itemRecipe)(resolved()));

  return (
    <ItemStylesContext
      value={{
        get slots() {
          return slots();
        },
        get variants() {
          return resolved();
        },
      }}
    >
      <ark.div
        {...rest}
        class={slots().base({ class: local.class })}
        data-part="root"
        data-scope="item"
        data-variant={variant()}
      />
    </ItemStylesContext>
  );
}

export function ItemMedia(props: ItemMediaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "class"]);
  const styles = useStyles();
  const variant = () => local.variant ?? "default";

  return (
    <div
      {...rest}
      class={styles.slots.media({ class: local.class, variant: variant() })}
      data-part="media"
      data-scope="item"
      data-variant={variant()}
    >
      {local.children}
    </div>
  );
}

export const ItemContent: Component<ItemContentProps> = withContext("div", {
  name: "Content",
});

export const ItemTitle: Component<ItemTitleProps> = withContext("div", {
  name: "Title",
});

export const ItemDescription: Component<ItemDescriptionProps> = withContext(
  "p",
  { name: "Description" },
);

export const ItemActions: Component<ItemActionsProps> = withContext("div", {
  name: "Actions",
});

export const ItemHeader: Component<ItemHeaderProps> = withContext("div", {
  name: "Header",
});

export const ItemFooter: Component<ItemFooterProps> = withContext("div", {
  name: "Footer",
});
