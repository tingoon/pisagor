import {
  JsonTreeView as JsonTreeViewPrimitive,
  type JsonTreeViewRootProps as JsonTreeViewRootPrimitiveProps,
  type JsonTreeViewTreeProps,
} from "@ark-ui/react";
import { CaretRightIcon } from "@phosphor-icons/react";
import type { JsonTreeViewProps as BaseJsonTreeViewRootProps } from "@pisagor/props";
import {
  type JsonTreeViewRecipeSlot,
  jsonTreeViewRecipe,
} from "@pisagor/recipes";

import type { FunctionComponent } from "react";
import { type VariantClassNames, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "JsonTreeView",
  recipe: jsonTreeViewRecipe,
});
// #endregion

// #region Types
export interface JsonTreeViewRootProps
  extends JsonTreeViewRootPrimitiveProps, BaseJsonTreeViewRootProps {}

type JsonTreeViewClassNames = VariantClassNames<JsonTreeViewRecipeSlot>;

export interface JsonTreeViewProps extends Omit<
  JsonTreeViewRootProps,
  "children"
> {
  renderValue?: JsonTreeViewTreeProps["renderValue"];
  /** Slot class names */
  classNames?: JsonTreeViewClassNames;
  /** Extra props forwarded to the json tree view tree element */
  treeProps?: Omit<
    JsonTreeViewTreeProps,
    "arrow" | "className" | "renderValue"
  >;
}
// #endregion

// #region Parts
const JsonTreeViewRoot = withProvider(JsonTreeViewPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<JsonTreeViewRootProps>;

const JsonTreeViewTree = withContext(JsonTreeViewPrimitive.Tree, {
  name: "Tree",
});
// #endregion

// #region Closed
function JsonTreeViewShorthand({
  renderValue,
  treeProps,
  className,
  classNames,
  ...rest
}: JsonTreeViewProps) {
  return (
    <JsonTreeViewRoot {...rest} className={className}>
      <JsonTreeViewTree
        {...treeProps}
        arrow={<CaretRightIcon />}
        className={classNames?.tree}
        renderValue={renderValue}
      />
    </JsonTreeViewRoot>
  );
}
// #endregion

// #region Display Names
JsonTreeViewShorthand.displayName = "JsonTreeView";

// #endregion

export type { JsonTreeViewTreeProps } from "@ark-ui/react";

export const JsonTreeView = Object.assign(JsonTreeViewShorthand, {
  Root: JsonTreeViewRoot,
  Tree: JsonTreeViewTree,
});
