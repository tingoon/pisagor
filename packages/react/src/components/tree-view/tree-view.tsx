import { ark } from "@ark-ui/react/factory";
import {
  createTreeCollection as arkCreateTreeCollection,
  type TreeCollection as arkTreeCollection,
  TreeView as TreeViewPrimitive,
} from "@ark-ui/react/tree-view";
import {
  CaretRightIcon,
  CheckIcon,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  MinusIcon,
} from "@phosphor-icons/react";
import {
  treeViewBranchContentVariants,
  treeViewBranchIndicatorVariants,
  treeViewBranchTitleVariants,
  treeViewBranchVariants,
  treeViewCheckboxVariants,
  treeViewControlVariants,
  treeViewItemIconVariants,
  treeViewItemTitleVariants,
  treeViewLabelVariants,
  treeViewNodeRenameInputVariants,
  treeViewTreeVariants,
  treeViewVariants,
} from "@pisagor/styles/ui/tree-view";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "react";
import type { WithTestId } from "../../internal/types";
import { checkboxVariants } from "../checkbox";
import { TreeViewContext, type TreeViewContextProps, useTreeView } from "./tree-view.context";

// #region Types
export interface TreeNodeType<T = unknown> {
  children?: TreeNodeType<T>[] | undefined;
  expandedIcon?: JSX.ElementType | null;
  icon?: JSX.ElementType | null;
  id: string;
  name: string;
}

export type TreeCollection = arkTreeCollection;

export interface TreeViewProps
  extends TreeViewPrimitive.RootComponentProps,
    TreeViewContextProps,
    WithTestId {}

export interface NodeProviderProps<T extends TreeNodeType = TreeNodeType>
  extends TreeViewPrimitive.NodeProviderProps<T> {}

export interface TreeViewBranchItemProps
  extends ComponentProps<typeof TreeViewPrimitive.BranchControl>,
    Pick<TreeViewBranchTitleProps, "icon" | "expandedIcon"> {}

export interface TreeViewBranchTitleProps
  extends ComponentProps<typeof TreeViewPrimitive.BranchText> {
  /**
   * Custom expanded icon
   *
   * @defaultValue <FolderOpenIcon />
   */
  expandedIcon?: JSX.ElementType | null;
  /**
   * Custom icon
   *
   * @defaultValue <FolderIcon />
   */
  icon?: JSX.ElementType | null;
}

export interface TreeViewItemTitleProps extends ComponentProps<typeof TreeViewPrimitive.ItemText> {}

export interface TreeViewItemProps extends TreeViewItemTitleProps {
  /**
   * Custom file icon
   *
   * @defaultValue <FileIcon />
   */
  icon?: JSX.ElementType;
}

export type TreeViewLabelProps = ComponentProps<typeof TreeViewPrimitive.Label>;

export type TreeViewTreeProps = ComponentProps<typeof TreeViewPrimitive.Tree>;

export type TreeViewBranchProps = ComponentProps<typeof TreeViewPrimitive.Branch>;

export type TreeViewBranchIndicatorProps = ComponentProps<typeof TreeViewPrimitive.BranchIndicator>;

export type TreeViewBranchContentProps = ComponentProps<typeof TreeViewPrimitive.BranchContent>;

export type TreeViewBranchIndentGuideProps = ComponentProps<
  typeof TreeViewPrimitive.BranchIndentGuide
>;

export type TreeViewContentProps = ComponentProps<typeof TreeViewPrimitive.Item>;

export type TreeViewCheckboxProps = ComponentProps<typeof TreeViewPrimitive.NodeCheckbox>;

export type TreeViewNodeInputProps = ComponentProps<typeof TreeViewPrimitive.NodeRenameInput>;
// #endregion

// #region Parts
export const createTreeCollection = <T extends TreeNodeType>(
  options: Parameters<typeof arkCreateTreeCollection<T>>[0],
) =>
  arkCreateTreeCollection<T>({
    nodeToString: (node) => node.name,
    nodeToValue: (node) => node.id,
    ...options,
  });

export function TreeViewRoot({
  fileIcons,
  lazyMount = true,
  unmountOnExit = true,
  className,
  testId,
  ...rest
}: TreeViewProps) {
  return (
    <TreeViewContext value={{ fileIcons }}>
      <TreeViewPrimitive.Root
        {...rest}
        className={treeViewVariants({ className })}
        data-testid={testId}
        lazyMount={lazyMount}
        unmountOnExit={unmountOnExit}
      />
    </TreeViewContext>
  );
}

export function TreeViewLabel({ className, ...rest }: TreeViewLabelProps) {
  return <TreeViewPrimitive.Label {...rest} className={treeViewLabelVariants({ className })} />;
}

export function TreeViewTree({ className, ...rest }: TreeViewTreeProps) {
  return <TreeViewPrimitive.Tree {...rest} className={treeViewTreeVariants({ className })} />;
}

export const TreeViewNode = <T extends TreeNodeType>(props: NodeProviderProps<T>) => (
  <TreeViewPrimitive.NodeProvider {...props} />
);

export function TreeViewBranch(props: TreeViewBranchProps) {
  return <TreeViewPrimitive.Branch className={treeViewBranchVariants()} {...props} />;
}

export function TreeViewBranchItem({
  icon,
  expandedIcon,
  className,
  children,
  ...rest
}: TreeViewBranchItemProps) {
  return (
    <TreeViewPrimitive.BranchControl {...rest} className={treeViewControlVariants({ className })}>
      <TreeViewBranchIndicator />
      <TreeViewBranchTitle expandedIcon={expandedIcon} icon={icon}>
        {children}
      </TreeViewBranchTitle>
    </TreeViewPrimitive.BranchControl>
  );
}

function TreeViewBranchTitle({
  icon: Icon,
  expandedIcon: ExpandedIcon,
  className,
  children,
  ...rest
}: TreeViewBranchTitleProps) {
  return (
    <TreeViewPrimitive.NodeContext>
      {(nodeState) => (
        <>
          {nodeState.renaming ? (
            <TreeViewNodeInput />
          ) : (
            <TreeViewPrimitive.BranchText
              {...rest}
              className={treeViewBranchTitleVariants({ className })}
            >
              {Icon !== null && !nodeState.expanded && (
                <TreeViewItemIcon>{Icon ? <Icon /> : <FolderIcon />}</TreeViewItemIcon>
              )}
              {ExpandedIcon !== null && nodeState.expanded && (
                <TreeViewItemIcon>
                  {ExpandedIcon ? <ExpandedIcon /> : <FolderOpenIcon />}
                </TreeViewItemIcon>
              )}
              {children}
            </TreeViewPrimitive.BranchText>
          )}
        </>
      )}
    </TreeViewPrimitive.NodeContext>
  );
}

export function TreeViewBranchIndicator({ className, ...rest }: TreeViewBranchIndicatorProps) {
  return (
    <TreeViewPrimitive.BranchIndicator
      {...rest}
      className={treeViewBranchIndicatorVariants({ className })}
    >
      <CaretRightIcon />
    </TreeViewPrimitive.BranchIndicator>
  );
}

export function TreeViewBranchContent({
  className,
  children,
  ...rest
}: TreeViewBranchContentProps) {
  const recipe = treeViewBranchContentVariants();

  return (
    <TreeViewPrimitive.BranchContent {...rest} className={recipe.base({ className })}>
      <TreeViewBranchIndentGuide />

      {children}
    </TreeViewPrimitive.BranchContent>
  );
}

function TreeViewBranchIndentGuide({ className, ...rest }: TreeViewBranchIndentGuideProps) {
  const recipe = treeViewBranchContentVariants();

  return (
    <TreeViewPrimitive.BranchIndentGuide {...rest} className={recipe.indentGuide({ className })} />
  );
}

export function TreeViewContent({ className, ...rest }: TreeViewContentProps) {
  return <TreeViewPrimitive.Item {...rest} className={treeViewControlVariants({ className })} />;
}

export function TreeViewItem({
  icon: Icon = FileIcon,
  className,
  children,
  ...rest
}: TreeViewItemProps) {
  const { fileIcons } = useTreeView();

  const getFileIcon = (value: string): JSX.ElementType => {
    const extension = getFileExtension(value);
    const resolved = extension ? fileIcons?.[extension] : undefined;
    return resolved ?? Icon;
  };

  return (
    <TreeViewPrimitive.NodeContext>
      {(nodeState) => {
        const ResolvedIcon = getFileIcon(nodeState.value);

        return (
          <>
            <TreeViewItemIcon>
              <ResolvedIcon />
            </TreeViewItemIcon>

            {nodeState.renaming ? (
              <TreeViewNodeInput />
            ) : (
              <TreeViewItemTitle {...rest}>{children}</TreeViewItemTitle>
            )}
          </>
        );
      }}
    </TreeViewPrimitive.NodeContext>
  );
}

function TreeViewItemIcon({ className, ...rest }: ComponentProps<typeof ark.span>) {
  return (
    <ark.span
      {...rest}
      className={treeViewItemIconVariants({ className })}
      data-part="item-icon"
      data-scope="tree-view"
    />
  );
}

function TreeViewItemTitle({ className, ...rest }: TreeViewItemTitleProps) {
  return (
    <TreeViewPrimitive.ItemText {...rest} className={treeViewItemTitleVariants({ className })} />
  );
}

export function TreeViewCheckbox({ className, ...rest }: TreeViewCheckboxProps) {
  return (
    <TreeViewPrimitive.NodeCheckbox
      {...rest}
      className={cn(checkboxVariants(), treeViewCheckboxVariants(), className)}
    >
      <TreeViewPrimitive.NodeCheckboxIndicator indeterminate={<MinusIcon />}>
        <CheckIcon />
      </TreeViewPrimitive.NodeCheckboxIndicator>
    </TreeViewPrimitive.NodeCheckbox>
  );
}

function TreeViewNodeInput({ className, ...rest }: TreeViewNodeInputProps) {
  return (
    <TreeViewPrimitive.NodeRenameInput
      {...rest}
      className={treeViewNodeRenameInputVariants({ className })}
    />
  );
}

type CreateFileIconsArgs = Record<`.${string}`, JSX.ElementType | null>;

export const createFileIcons = (args: CreateFileIconsArgs) => ({ ...args });

const getFileExtension = (file: string) => {
  const name = file.includes(".") ? file.split(".").at(-1)?.toLowerCase() : null;

  return name ? `.${name}` : null;
};

TreeViewRoot.displayName = "TreeView";
TreeViewLabel.displayName = "TreeView.Label";
TreeViewTree.displayName = "TreeView.Tree";
TreeViewNode.displayName = "TreeView.Node";
TreeViewBranch.displayName = "TreeView.Branch";
TreeViewBranchItem.displayName = "TreeView.BranchItem";
TreeViewBranchIndicator.displayName = "TreeView.BranchIndicator";
TreeViewBranchContent.displayName = "TreeView.BranchContent";
TreeViewContent.displayName = "TreeView.Content";
TreeViewItem.displayName = "TreeView.Item";
TreeViewCheckbox.displayName = "TreeView.Checkbox";
// #endregion
