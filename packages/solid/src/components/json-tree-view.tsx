import {
  JsonTreeView as JsonTreeViewPrimitive,
  type JsonTreeViewRootProps as JsonTreeViewPrimitiveRootProps,
  type JsonTreeViewTreeProps,
} from "@ark-ui/solid";
import type { JsonTreeViewProps as BaseJsonTreeViewRootProps } from "@pisagor/props";
import {
  type JsonTreeViewRecipeSlot,
  jsonTreeViewRecipe,
} from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { splitProps } from "solid-js";
import {
  CaretRightIcon,
  type VariantClassNames,
  createSlotRecipeContext,
} from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "JsonTreeView",
  recipe: jsonTreeViewRecipe,
});
// #endregion

export interface JsonTreeViewRootProps
  extends JsonTreeViewPrimitiveRootProps, BaseJsonTreeViewRootProps {}

type JsonTreeViewClassNames = VariantClassNames<JsonTreeViewRecipeSlot>;

export interface JsonTreeViewProps extends Omit<
  JsonTreeViewRootProps,
  "children"
> {
  renderValue?: JsonTreeViewTreeProps["renderValue"];
  classNames?: JsonTreeViewClassNames;
  treeProps?: Omit<JsonTreeViewTreeProps, "arrow" | "class" | "renderValue">;
}

const JsonTreeViewRoot: Component<JsonTreeViewRootProps> = withProvider(
  JsonTreeViewPrimitive.Root,
  { name: "Root", slot: "base" },
);

const JsonTreeViewTree: Component<JsonTreeViewTreeProps> = withContext(
  JsonTreeViewPrimitive.Tree,
  { name: "Tree" },
);

function JsonTreeViewShorthand(props: JsonTreeViewProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "renderValue",
    "treeProps",
    "class",
    "classNames",
  ]);

  return (
    <JsonTreeViewRoot {...rest} class={local.class}>
      <JsonTreeViewTree
        {...local.treeProps}
        arrow={<CaretRightIcon />}
        class={local.classNames?.tree}
        renderValue={local.renderValue}
      />
    </JsonTreeViewRoot>
  );
}

export type { JsonTreeViewTreeProps } from "@ark-ui/solid";

export const JsonTreeView = Object.assign(JsonTreeViewShorthand, {
  Root: JsonTreeViewRoot,
  Tree: JsonTreeViewTree,
});
