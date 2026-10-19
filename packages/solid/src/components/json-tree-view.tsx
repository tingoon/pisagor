import {
  JsonTreeView as JsonTreeViewPrimitive,
  type JsonTreeViewRootProps as JsonTreeViewRootPrimitiveProps,
  type JsonTreeViewTreeProps,
} from "@ark-ui/solid";
import type {
  JsonTreeViewContract,
  JsonTreeViewRootContract,
} from "@pisagor/contracts";
import { jsonTreeViewRecipe } from "@pisagor/recipes";
import type { Component, JSX, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";
import { CaretRightIcon, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "JsonTreeView",
  recipe: jsonTreeViewRecipe,
});
// #endregion

export type JsonTreeViewRootProps = JsonTreeViewRootPrimitiveProps &
  JsonTreeViewRootContract &
  JsonTreeViewContract;

export interface JsonTreeViewProps extends Omit<
  JsonTreeViewRootProps,
  "children"
> {
  renderValue?: JsonTreeViewTreeProps["renderValue"];
  treeProps?: Omit<JsonTreeViewTreeProps, "arrow" | "class" | "renderValue">;
}

const JsonTreeViewRoot: Component<JsonTreeViewRootProps> = withProvider<
  ComponentProps<typeof JsonTreeViewPrimitive.Root> & JsonTreeViewRootContract
>(JsonTreeViewPrimitive.Root, { name: "Root" });

const JsonTreeViewTree: Component<JsonTreeViewTreeProps> = withContext<
  ComponentProps<typeof JsonTreeViewPrimitive.Tree>
>(JsonTreeViewPrimitive.Tree, { name: "Tree" });

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
