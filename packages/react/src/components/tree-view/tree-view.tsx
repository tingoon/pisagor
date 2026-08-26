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
import { formControlToggleVariants } from "../../internal/form-control/form-control-variants";
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

export interface TreeViewProps extends TreeViewPrimitive.RootComponentProps, TreeViewContextProps {}

export interface NodeProviderProps<T extends TreeNodeType = TreeNodeType>
  extends TreeViewPrimitive.NodeProviderProps<T> {}

export interface TreeViewBranchControlProps
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

export interface TreeViewItemTextProps extends TreeViewItemTitleProps {
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

export type TreeViewItemProps = ComponentProps<typeof TreeViewPrimitive.Item>;

export type TreeViewNodeCheckboxProps = ComponentProps<typeof TreeViewPrimitive.NodeCheckbox>;

export type TreeViewNodeInputProps = ComponentProps<typeof TreeViewPrimitive.NodeRenameInput>;

interface TreeViewItemIconProps extends ComponentProps<typeof ark.span> {}
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
  ...rest
}: TreeViewProps) {
  return (
    <TreeViewContext value={{ fileIcons }}>
      <TreeViewPrimitive.Root
        {...rest}
        className={treeViewVariants({ className })}
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

export const TreeViewNodeProvider = <T extends TreeNodeType>(props: NodeProviderProps<T>) => (
  <TreeViewPrimitive.NodeProvider {...props} />
);

export function TreeViewBranch(props: TreeViewBranchProps) {
  return <TreeViewPrimitive.Branch className={treeViewBranchVariants()} {...props} />;
}

export function TreeViewBranchControl({
  icon,
  expandedIcon,
  className,
  children,
  ...rest
}: TreeViewBranchControlProps) {
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
  const slots = treeViewBranchContentVariants();

  return (
    <TreeViewPrimitive.BranchContent {...rest} className={slots.base({ className })}>
      <TreeViewBranchIndentGuide />

      {children}
    </TreeViewPrimitive.BranchContent>
  );
}

function TreeViewBranchIndentGuide({ className, ...rest }: TreeViewBranchIndentGuideProps) {
  const slots = treeViewBranchContentVariants();

  return (
    <TreeViewPrimitive.BranchIndentGuide {...rest} className={slots.indentGuide({ className })} />
  );
}

export function TreeViewItem({ className, ...rest }: TreeViewItemProps) {
  return <TreeViewPrimitive.Item {...rest} className={treeViewControlVariants({ className })} />;
}

export function TreeViewItemText({
  icon: Icon = FileIcon,
  className,
  children,
  ...rest
}: TreeViewItemTextProps) {
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

function TreeViewItemIcon({ className, ...rest }: TreeViewItemIconProps) {
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

export function TreeViewNodeCheckbox({ className, ...rest }: TreeViewNodeCheckboxProps) {
  return (
    <TreeViewPrimitive.NodeCheckbox
      {...rest}
      className={cn(formControlToggleVariants(), treeViewCheckboxVariants(), className)}
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
// #endregion

// #region Display Names
TreeViewRoot.displayName = "TreeView";
TreeViewLabel.displayName = "TreeView.Label";
TreeViewTree.displayName = "TreeView.Tree";
TreeViewNodeProvider.displayName = "TreeView.NodeProvider";
TreeViewBranch.displayName = "TreeView.Branch";
TreeViewBranchControl.displayName = "TreeView.BranchControl";
TreeViewBranchIndicator.displayName = "TreeView.BranchIndicator";
TreeViewBranchContent.displayName = "TreeView.BranchContent";
TreeViewItem.displayName = "TreeView.Item";
TreeViewItemText.displayName = "TreeView.ItemText";
TreeViewNodeCheckbox.displayName = "TreeView.NodeCheckbox";
// #endregion
