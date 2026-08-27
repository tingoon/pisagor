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
  treeViewBranchVariants,
  treeViewItemVariants,
  treeViewVariants,
} from "@pisagor/recipes/tree-view";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "react";
import { useMemo } from "react";
import { formControlToggleVariants } from "../../internal/form-control/form-control-variants";
import {
  TreeViewBranchContext,
  TreeViewContext,
  type TreeViewContextProps,
  TreeViewItemContext,
  useTreeView,
  useTreeViewBranch,
  useTreeViewItem,
} from "./tree-view.context";

// #region Types
export interface TreeNodeType<T = unknown> {
  children?: TreeNodeType<T>[] | undefined;
  expandedIcon?: JSX.ElementType | null;
  icon?: JSX.ElementType | null;
  id: string;
  name: string;
}

export type TreeCollection = arkTreeCollection;

export type TreeViewProps = TreeViewPrimitive.RootComponentProps & TreeViewContextProps;

export type NodeProviderProps<T extends TreeNodeType = TreeNodeType> =
  TreeViewPrimitive.NodeProviderProps<T>;

export type TreeViewBranchControlProps = ComponentProps<typeof TreeViewPrimitive.BranchControl> &
  Pick<TreeViewBranchTitleProps, "icon" | "expandedIcon">;

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

export type TreeViewItemTitleProps = ComponentProps<typeof TreeViewPrimitive.ItemText>;

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

export function TreeViewRoot({ children, fileIcons, className, ...rest }: TreeViewProps) {
  const slots = useMemo(() => treeViewVariants(), []);

  return (
    <TreeViewContext value={{ fileIcons, slots }}>
      <TreeViewPrimitive.Root {...rest} className={slots.base({ className })}>
        {children}
      </TreeViewPrimitive.Root>
    </TreeViewContext>
  );
}

export function TreeViewLabel({ className, ...rest }: TreeViewLabelProps) {
  const { slots } = useTreeView();

  return <TreeViewPrimitive.Label {...rest} className={slots.label({ className })} />;
}

export function TreeViewTree({ className, ...rest }: TreeViewTreeProps) {
  const { slots } = useTreeView();

  return <TreeViewPrimitive.Tree {...rest} className={slots.tree({ className })} />;
}

export const TreeViewNodeProvider = <T extends TreeNodeType>(props: NodeProviderProps<T>) => (
  <TreeViewPrimitive.NodeProvider {...props} />
);

export function TreeViewBranch({ children, className, ...rest }: TreeViewBranchProps) {
  const slots = useMemo(() => treeViewBranchVariants(), []);

  return (
    <TreeViewBranchContext value={{ slots }}>
      <TreeViewPrimitive.Branch {...rest} className={slots.base({ className })}>
        {children}
      </TreeViewPrimitive.Branch>
    </TreeViewBranchContext>
  );
}

export function TreeViewBranchControl({
  children,
  expandedIcon,
  icon,
  className,
  ...rest
}: TreeViewBranchControlProps) {
  const { slots } = useTreeView();

  return (
    <TreeViewPrimitive.BranchControl {...rest} className={slots.control({ className })}>
      <TreeViewBranchIndicator />
      <TreeViewBranchTitle expandedIcon={expandedIcon} icon={icon}>
        {children}
      </TreeViewBranchTitle>
    </TreeViewPrimitive.BranchControl>
  );
}

function TreeViewBranchTitle({
  children,
  expandedIcon: ExpandedIcon,
  icon: Icon,
  className,
  ...rest
}: TreeViewBranchTitleProps) {
  const { slots } = useTreeViewBranch();

  return (
    <TreeViewPrimitive.NodeContext>
      {(nodeState) => (
        <>
          {nodeState.renaming ? (
            <TreeViewNodeInput />
          ) : (
            <TreeViewPrimitive.BranchText {...rest} className={slots.title({ className })}>
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
  const { slots } = useTreeViewBranch();

  return (
    <TreeViewPrimitive.BranchIndicator {...rest} className={slots.indicator({ className })}>
      <CaretRightIcon />
    </TreeViewPrimitive.BranchIndicator>
  );
}

export function TreeViewBranchContent({
  children,
  className,
  ...rest
}: TreeViewBranchContentProps) {
  const { slots } = useTreeViewBranch();

  return (
    <TreeViewPrimitive.BranchContent {...rest} className={slots.content({ className })}>
      <TreeViewBranchIndentGuide />

      {children}
    </TreeViewPrimitive.BranchContent>
  );
}

function TreeViewBranchIndentGuide({ className, ...rest }: TreeViewBranchIndentGuideProps) {
  const { slots } = useTreeViewBranch();

  return (
    <TreeViewPrimitive.BranchIndentGuide {...rest} className={slots.indentGuide({ className })} />
  );
}

export function TreeViewItem({ children, className, ...rest }: TreeViewItemProps) {
  const { slots } = useTreeView();
  const itemSlots = useMemo(() => treeViewItemVariants(), []);

  return (
    <TreeViewItemContext value={{ slots: itemSlots }}>
      <TreeViewPrimitive.Item {...rest} className={slots.control({ className })}>
        {children}
      </TreeViewPrimitive.Item>
    </TreeViewItemContext>
  );
}

export function TreeViewItemText({
  children,
  icon: Icon = FileIcon,
  className,
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
              <TreeViewItemTitle {...rest} className={className}>
                {children}
              </TreeViewItemTitle>
            )}
          </>
        );
      }}
    </TreeViewPrimitive.NodeContext>
  );
}

function TreeViewItemIcon({ className, ...rest }: TreeViewItemIconProps) {
  const item = useTreeViewItem();
  const slots = item?.slots ?? treeViewItemVariants();

  return (
    <ark.span
      {...rest}
      className={slots.icon({ className })}
      data-part="item-icon"
      data-scope="tree-view"
    />
  );
}

function TreeViewItemTitle({ className, ...rest }: TreeViewItemTitleProps) {
  const item = useTreeViewItem();
  const slots = item?.slots ?? treeViewItemVariants();

  return <TreeViewPrimitive.ItemText {...rest} className={slots.title({ className })} />;
}

export function TreeViewNodeCheckbox({ className, ...rest }: TreeViewNodeCheckboxProps) {
  const item = useTreeViewItem();
  const slots = item?.slots ?? treeViewItemVariants();

  return (
    <TreeViewPrimitive.NodeCheckbox
      {...rest}
      className={cn(formControlToggleVariants(), slots.checkbox(), className)}
    >
      <TreeViewPrimitive.NodeCheckboxIndicator indeterminate={<MinusIcon />}>
        <CheckIcon />
      </TreeViewPrimitive.NodeCheckboxIndicator>
    </TreeViewPrimitive.NodeCheckbox>
  );
}

function TreeViewNodeInput({ className, ...rest }: TreeViewNodeInputProps) {
  const item = useTreeViewItem();
  const slots = item?.slots ?? treeViewItemVariants();

  return (
    <TreeViewPrimitive.NodeRenameInput {...rest} className={slots.renameInput({ className })} />
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
