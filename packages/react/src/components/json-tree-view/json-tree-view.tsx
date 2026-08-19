import { JsonTreeView as JsonTreeViewPrimitive } from "@ark-ui/react/json-tree-view";
import { CaretRightIcon } from "@phosphor-icons/react";
import { jsonTreeViewVariants } from "@pisagor/styles/ui/json-tree-view";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Variants

// #endregion

// #region Types
type JsonTreeViewTreeProps = ComponentProps<typeof JsonTreeViewPrimitive.Tree>;

type JsonTreeViewClassNames = VariantClassNames<typeof jsonTreeViewVariants>;

type JsonTreeViewRootProps = ComponentProps<typeof JsonTreeViewPrimitive.Root>;

interface JsonTreeViewProps extends JsonTreeViewRootProps, WithTestId {
  /** Slot class names */
  classNames?: JsonTreeViewClassNames;
  renderValue?: JsonTreeViewTreeProps["renderValue"];
  /** Extra props forwarded to the json tree view tree element */
  treeProps?: Omit<JsonTreeViewTreeProps, "arrow" | "className" | "renderValue">;
}
// #endregion

// #region Component
export function JsonTreeView({
  lazyMount = true,
  unmountOnExit = true,
  className,
  classNames,
  renderValue,
  treeProps,
  testId,
  ...rest
}: JsonTreeViewProps) {
  const slots = jsonTreeViewVariants();

  return (
    <JsonTreeViewPrimitive.Root
      {...rest}
      className={cn(slots.root(), className, classNames?.root)}
      data-testid={testId}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
    >
      <JsonTreeViewPrimitive.Tree
        {...treeProps}
        arrow={<CaretRightIcon />}
        className={cn(slots.tree(), classNames?.tree)}
        renderValue={renderValue}
      />
    </JsonTreeViewPrimitive.Root>
  );
}
// #endregion
