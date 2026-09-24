import {
  JsonTreeView as JsonTreeViewPrimitive,
  type JsonTreeViewRootProps as JsonTreeViewPrimitiveRootProps,
  type JsonTreeViewTreeProps,
} from "@ark-ui/solid/json-tree-view";
import { type JsonTreeViewRecipeSlot, jsonTreeViewRecipe } from "@pisagor/recipes/json-tree-view";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { CaretRightIcon } from "../../internal/icons";
import type { VariantClassNames } from "../../internal/types";
import { JsonTreeViewContext, useJsonTreeView } from "./json-tree-view.context";

export interface JsonTreeViewRootProps extends JsonTreeViewPrimitiveRootProps {
  recipe?: typeof jsonTreeViewRecipe;
}

type JsonTreeViewClassNames = VariantClassNames<JsonTreeViewRecipeSlot>;

export interface JsonTreeViewProps extends Omit<JsonTreeViewRootProps, "children"> {
  renderValue?: JsonTreeViewTreeProps["renderValue"];
  classNames?: JsonTreeViewClassNames;
  treeProps?: Omit<JsonTreeViewTreeProps, "arrow" | "class" | "renderValue">;
}

function JsonTreeViewRoot(props: JsonTreeViewRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? jsonTreeViewRecipe)();

  return (
    <JsonTreeViewContext value={{ slots: slots() }}>
      <JsonTreeViewPrimitive.Root {...rest} class={slots().base({ class: cn(local.class) })}>
        {local.children}
      </JsonTreeViewPrimitive.Root>
    </JsonTreeViewContext>
  );
}

function JsonTreeViewTree(props: JsonTreeViewTreeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useJsonTreeView();
  return <JsonTreeViewPrimitive.Tree {...rest} class={slots.tree({ class: local.class })} />;
}

export function JsonTreeView(props: JsonTreeViewProps): JSX.Element {
  const [local, rest] = splitProps(props, ["renderValue", "treeProps", "class", "classNames"]);

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
