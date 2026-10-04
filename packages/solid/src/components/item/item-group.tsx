import { ark } from "@ark-ui/solid/factory";
import type {
  ItemProps as ItemGroupSharedProps,
  ItemProps as ItemSeparatorSharedProps,
} from "@pisagor/props";
import { itemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Separator, type SeparatorProps } from "../separator";
import { ItemGroupContext } from "./item-group.context";

export interface ItemGroupProps
  extends ComponentProps<typeof ark.div>,
    ItemGroupSharedProps {}

export interface ItemSeparatorProps
  extends Omit<SeparatorProps, "recipe">,
    ItemSeparatorSharedProps {}

export function ItemGroup(props: ItemGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "children",
    "recipe",
    "class",
  ]);
  const variant = () => local.variant ?? "default";
  const slots = () => (local.recipe ?? itemRecipe)();

  return (
    <ItemGroupContext value={{ variant: variant() }}>
      <ark.div
        {...rest}
        class={slots().group({ class: cn(local.class) })}
        data-part="group"
        data-scope="item"
        data-variant={variant()}
        role="list"
      >
        {local.children}
      </ark.div>
    </ItemGroupContext>
  );
}

export function ItemSeparator(props: ItemSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  const slots = () => (local.recipe ?? itemRecipe)();

  return (
    <Separator
      {...rest}
      class={slots().separator({ class: cn(local.class) })}
      data-part="separator"
      data-scope="item"
      orientation="horizontal"
    />
  );
}
