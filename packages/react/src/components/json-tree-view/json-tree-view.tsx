import {
  JsonTreeView as JsonTreeViewPrimitive,
  type JsonTreeViewRootProps,
  type JsonTreeViewTreeProps,
} from "@ark-ui/react/json-tree-view";
import { CaretRightIcon } from "@phosphor-icons/react";
import { type JsonTreeViewRecipeSlot, jsonTreeViewRecipe } from "@pisagor/recipes/json-tree-view";

import type { VariantClassNames } from "../../internal/types";
import { JsonTreeViewContext, useJsonTreeView } from "./json-tree-view.context";

// #region Types
type JsonTreeViewClassNames = VariantClassNames<JsonTreeViewRecipeSlot>;

export interface JsonTreeViewProps extends Omit<JsonTreeViewRootProps, "children"> {
  renderValue?: JsonTreeViewTreeProps["renderValue"];
  /** Slot class names */
  classNames?: JsonTreeViewClassNames;
  /** Extra props forwarded to the json tree view tree element */
  treeProps?: Omit<JsonTreeViewTreeProps, "arrow" | "className" | "renderValue">;
}
// #endregion

// #region Parts
function JsonTreeViewRoot({ children, className, ...rest }: JsonTreeViewRootProps) {
  const slots = jsonTreeViewRecipe();

  return (
    <JsonTreeViewContext value={{ slots }}>
      <JsonTreeViewPrimitive.Root {...rest} className={slots.base({ className })}>
        {children}
      </JsonTreeViewPrimitive.Root>
    </JsonTreeViewContext>
  );
}

function JsonTreeViewTree({ className, ...rest }: JsonTreeViewTreeProps) {
  const { slots } = useJsonTreeView();

  return <JsonTreeViewPrimitive.Tree {...rest} className={slots.tree({ className })} />;
}
// #endregion

// #region Closed
export function JsonTreeView({
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
JsonTreeViewRoot.displayName = "JsonTreeView.Root";
JsonTreeViewTree.displayName = "JsonTreeView.Tree";
JsonTreeView.displayName = "JsonTreeView";
// #endregion
