import type { ItemRootContract } from "@pisagor/contracts";
import { itemRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Separator, type SeparatorProps } from "../separator";
import { ItemGroupContext } from "./item-group.context";

export type ItemGroupProps = ComponentProps<"div"> & ItemRootContract;

export type ItemSeparatorProps = Omit<SeparatorProps, "recipe"> &
  ItemRootContract;

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
      <div
        {...rest}
        class={slots().group({ class: local.class })}
        data-part="group"
        data-scope="item"
        data-variant={variant()}
        role="list"
      >
        {local.children}
      </div>
    </ItemGroupContext>
  );
}

export function ItemSeparator(props: ItemSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  const slots = () => (local.recipe ?? itemRecipe)();

  return (
    <Separator
      {...rest}
      class={slots().separator({ class: local.class })}
      data-part="separator"
      data-scope="item"
      orientation="horizontal"
    />
  );
}
