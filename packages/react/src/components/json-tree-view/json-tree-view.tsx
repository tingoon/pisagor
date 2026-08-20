import { JsonTreeView as JsonTreeViewPrimitive } from "@ark-ui/react/json-tree-view";
import { CaretRightIcon } from "@phosphor-icons/react";
import { type JsonTreeViewSlots, jsonTreeViewVariants } from "@pisagor/styles/ui/json-tree-view";
import type { ComponentProps } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { JsonTreeViewContext, useJsonTreeView } from "./json-tree-view.context";

// #region Types
type JsonTreeViewTreeProps = ComponentProps<typeof JsonTreeViewPrimitive.Tree>;

type JsonTreeViewClassNames = VariantClassNames<JsonTreeViewSlots>;

type JsonTreeViewRootProps = ComponentProps<typeof JsonTreeViewPrimitive.Root> & WithTestId;

export interface JsonTreeViewProps extends Omit<JsonTreeViewRootProps, "children"> {
  /** Slot class names */
  classNames?: JsonTreeViewClassNames;
  renderValue?: JsonTreeViewTreeProps["renderValue"];
  /** Extra props forwarded to the json tree view tree element */
  treeProps?: Omit<JsonTreeViewTreeProps, "arrow" | "className" | "renderValue">;
}
// #endregion

// #region Parts
function JsonTreeViewRoot({
  children,
  className,
  lazyMount = true,
  testId,
  unmountOnExit = true,
  ...rest
}: JsonTreeViewRootProps) {
  const slots = jsonTreeViewVariants();

  return (
    <JsonTreeViewContext value={{ slots }}>
      <JsonTreeViewPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-testid={testId}
        lazyMount={lazyMount}
        unmountOnExit={unmountOnExit}
      >
        {children}
      </JsonTreeViewPrimitive.Root>
    </JsonTreeViewContext>
  );
}
JsonTreeViewRoot.displayName = "JsonTreeView.Root";

function JsonTreeViewTree({ className, ...rest }: JsonTreeViewTreeProps) {
  const { slots } = useJsonTreeView();

  return <JsonTreeViewPrimitive.Tree {...rest} className={slots.tree({ className })} />;
}
JsonTreeViewTree.displayName = "JsonTreeView.Tree";
// #endregion

// #region Closed
export function JsonTreeView({
  className,
  classNames,
  renderValue,
  testId,
  treeProps,
  ...rest
}: JsonTreeViewProps) {
  return (
    <JsonTreeViewRoot {...rest} className={className} testId={testId}>
      <JsonTreeViewTree
        {...treeProps}
        arrow={<CaretRightIcon />}
        className={classNames?.tree}
        renderValue={renderValue}
      />
    </JsonTreeViewRoot>
  );
}
JsonTreeView.displayName = "JsonTreeView";
// #endregion
