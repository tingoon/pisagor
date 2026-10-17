import { JsonTreeView } from "@pisagor/react";
import { jsonTreeViewRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";
import { defaultData } from "./helpers";

const brandJsonTreeViewRecipe = tv({
  extend: jsonTreeViewRecipe,
  slots: {
    tree: "**:data-[kind=key]:text-emerald-700 dark:**:data-[kind=key]:text-emerald-300",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <JsonTreeView
      data={defaultData()}
      defaultExpandedDepth={1}
      recipe={brandJsonTreeViewRecipe}
    />
  );
}
