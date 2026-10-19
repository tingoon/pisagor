import {
  TreeView as TreeViewPrimitive,
  createTreeCollection as arkCreateTreeCollection,
  useTreeViewNodeContext,
} from "@ark-ui/react";
import type {
  TreeCollection as ArkTreeCollection,
  TreeViewBranchContentProps,
  TreeViewBranchControlProps,
  TreeViewBranchIndentGuideProps,
  TreeViewBranchIndicatorProps,
  TreeViewBranchProps as TreeViewBranchPrimitiveProps,
  TreeViewBranchTextProps,
  TreeViewBranchTriggerProps,
  TreeViewItemProps as TreeViewItemPrimitiveProps,
  TreeViewItemTextProps,
  TreeViewLabelProps,
  TreeViewNodeCheckboxIndicatorProps,
  TreeViewNodeCheckboxProps,
  TreeViewNodeRenameInputProps,
  TreeViewRootProps as TreeViewRootPrimitiveProps,
  TreeViewTreeProps,
} from "@ark-ui/react";
import {
  CaretRightIcon,
  CheckIcon,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  MinusIcon,
} from "@phosphor-icons/react";
import type {
  TreeViewBranchRootContract,
  TreeViewContract,
  TreeViewItemRootContract,
  TreeViewRootContract,
} from "@pisagor/contracts";
import {
  formControlToggleRecipe,
  treeViewBranchRecipe,
  treeViewItemRecipe,
  treeViewRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentPropsWithRef, JSX, ReactNode } from "react";
import { use } from "react";
import { createSlotRecipeContext } from "../internal";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "TreeView",
  recipe: treeViewRecipe,
});

const { withContext: withBranchContext, withProvider: withBranchProvider } =
  createSlotRecipeContext({
    name: "TreeView",
    recipe: treeViewBranchRecipe,
  });

const { Context: TreeViewItemStylesContext, withProvider: withItemProvider } =
  createSlotRecipeContext({
    name: "TreeView",
    recipe: treeViewItemRecipe,
  });

/** Item styles when inside `Item`, default item styles otherwise (branches). */
function useItemSlots() {
  const item = use(TreeViewItemStylesContext);

  return item?.slots ?? treeViewItemRecipe();
}
// #endregion

// #region Types
export interface TreeNodeType<T = unknown> {
  children?: TreeNodeType<T>[] | undefined;
  expandedIcon?: JSX.ElementType | null;
  icon?: JSX.ElementType | null;
  id: string;
  name: string;
}

export type TreeCollection = ArkTreeCollection;

export type TreeViewRootProps<T extends TreeNodeType = TreeNodeType> =
  TreeViewRootPrimitiveProps<T> & TreeViewRootContract;

export interface TreeViewProps<T extends TreeNodeType = TreeNodeType>
  extends Omit<TreeViewRootProps<T>, "children">, TreeViewContract {
  /**
   * Default folder icon (`null` hides it). A node's own `icon` wins.
   *
   * @defaultValue FolderIcon
   */
  branchIcon?: JSX.ElementType | null;
  /**
   * Default open-folder icon (`null` hides it). A node's own `expandedIcon`
   * wins.
   *
   * @defaultValue FolderOpenIcon
   */
  branchExpandedIcon?: JSX.ElementType | null;
  /**
   * Whether to render a checkbox per node (use with `checkedValue`).
   *
   * @defaultValue false
   */
  checkbox?: boolean;
  /** Icons by file extension (see `createFileIcons`). */
  fileIcons?: Record<string, JSX.ElementType | null>;
  /**
   * Default file icon. A node's own `icon` or a `fileIcons` match wins.
   *
   * @defaultValue FileIcon
   */
  itemIcon?: JSX.ElementType;
  /** Visible label rendered above the tree. */
  label?: ReactNode;
}

export type TreeViewBranchProps = TreeViewBranchPrimitiveProps &
  TreeViewBranchRootContract;

export type TreeViewItemProps = TreeViewItemPrimitiveProps &
  TreeViewItemRootContract;

export type NodeProviderProps<T extends TreeNodeType = TreeNodeType> =
  TreeViewPrimitive.NodeProviderProps<T>;

export type {
  TreeViewBranchContentProps,
  TreeViewBranchControlProps,
  TreeViewBranchIndentGuideProps,
  TreeViewBranchIndicatorProps,
  TreeViewBranchTextProps,
  TreeViewBranchTriggerProps,
  TreeViewItemTextProps,
  TreeViewLabelProps,
  TreeViewNodeCheckboxIndicatorProps,
  TreeViewNodeCheckboxProps,
  TreeViewNodeRenameInputProps,
  TreeViewTreeProps,
};
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

type CreateFileIconsArgs = Record<`.${string}`, JSX.ElementType | null>;

export const createFileIcons = (args: CreateFileIconsArgs) => ({ ...args });

const Root = withProvider<TreeViewRootProps>(TreeViewPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as TreeViewPrimitive.RootComponent<TreeViewRootContract>;

const Label = withContext<TreeViewLabelProps>(TreeViewPrimitive.Label, {
  name: "Label",
});

const Tree = withContext<TreeViewTreeProps>(TreeViewPrimitive.Tree, {
  name: "Tree",
});

const NodeProvider = <T extends TreeNodeType>(props: NodeProviderProps<T>) => (
  <TreeViewPrimitive.NodeProvider {...props} />
);

const Branch = withBranchProvider<TreeViewBranchProps>(
  TreeViewPrimitive.Branch,
  { name: "Branch", slot: "base" },
);

const BranchControl = withContext<TreeViewBranchControlProps>(
  TreeViewPrimitive.BranchControl,
  { name: "BranchControl", slot: "control" },
);

const BranchIndicator = withBranchContext<TreeViewBranchIndicatorProps>(
  TreeViewPrimitive.BranchIndicator,
  { name: "BranchIndicator", slot: "indicator" },
);

const BranchText = withBranchContext<TreeViewBranchTextProps>(
  TreeViewPrimitive.BranchText,
  { name: "BranchText", slot: "title" },
);

const BranchTrigger = withBranchContext<TreeViewBranchTriggerProps>(
  TreeViewPrimitive.BranchTrigger,
  { name: "BranchTrigger", slot: "trigger" },
);

const BranchContent = withBranchContext<TreeViewBranchContentProps>(
  TreeViewPrimitive.BranchContent,
  { name: "BranchContent", slot: "content" },
);

const BranchIndentGuide = withBranchContext<TreeViewBranchIndentGuideProps>(
  TreeViewPrimitive.BranchIndentGuide,
  { name: "BranchIndentGuide", slot: "indentGuide" },
);

const ItemBase = withItemProvider<TreeViewItemProps>(TreeViewPrimitive.Item, {
  name: "Item",
  slot: "base",
});

/** Item; shares the row (`control`) styles with `BranchControl`. */
function Item({ className, ...props }: TreeViewItemProps) {
  const { slots } = useStyles();

  return <ItemBase {...props} className={slots.control({ className })} />;
}

/** Item text; styled by the item recipe `title` slot. */
function ItemText({ className, ...props }: TreeViewItemTextProps) {
  const slots = useItemSlots();

  return (
    <TreeViewPrimitive.ItemText
      {...props}
      className={slots.title({ className })}
    />
  );
}

/** Node checkbox; render `NodeCheckboxIndicator` with your icons inside. */
function NodeCheckbox({ className, ...props }: TreeViewNodeCheckboxProps) {
  const slots = useItemSlots();
  const surfaceVariant = useFormControlSurface();

  return (
    <TreeViewPrimitive.NodeCheckbox
      {...props}
      className={cn(
        formControlToggleRecipe({ surfaceVariant }),
        slots.checkbox(),
        className,
      )}
    />
  );
}

const NodeCheckboxIndicator = TreeViewPrimitive.NodeCheckboxIndicator;

/** Rename input; styled by the item recipe `renameInput` slot. */
function NodeRenameInput({
  className,
  ...props
}: TreeViewNodeRenameInputProps) {
  const slots = useItemSlots();

  return (
    <TreeViewPrimitive.NodeRenameInput
      {...props}
      className={slots.renameInput({ className })}
    />
  );
}
// #endregion

// #region Shorthand
const getFileExtension = (file: string) => {
  const name = file.includes(".")
    ? file.split(".").at(-1)?.toLowerCase()
    : null;

  return name ? `.${name}` : null;
};

function NodeIcon({
  className,
  icon: Icon,
  ...props
}: ComponentPropsWithRef<"span"> & { icon: JSX.ElementType | null }) {
  const slots = useItemSlots();

  if (!Icon) {
    return null;
  }

  return (
    <span
      {...props}
      className={slots.icon({ className })}
      data-part="item-icon"
      data-scope="tree-view"
    >
      <Icon />
    </span>
  );
}

type ShorthandOptions = Pick<
  TreeViewProps,
  | "branchClassNames"
  | "branchExpandedIcon"
  | "branchIcon"
  | "checkbox"
  | "classNames"
  | "fileIcons"
  | "itemClassNames"
  | "itemIcon"
>;

function ShorthandCheckbox({ options }: { options: ShorthandOptions }) {
  if (!options.checkbox) {
    return null;
  }

  return (
    <NodeCheckbox className={options.itemClassNames?.checkbox}>
      <NodeCheckboxIndicator indeterminate={<MinusIcon />}>
        <CheckIcon />
      </NodeCheckboxIndicator>
    </NodeCheckbox>
  );
}

function ShorthandNode({
  indexPath,
  node,
  options,
}: {
  indexPath: number[];
  node: TreeNodeType;
  options: ShorthandOptions;
}) {
  return (
    <NodeProvider indexPath={indexPath} node={node}>
      {node.children ? (
        <Branch className={options.branchClassNames?.base}>
          <BranchControl className={options.classNames?.control}>
            <BranchIndicator className={options.branchClassNames?.indicator}>
              <CaretRightIcon />
            </BranchIndicator>
            <ShorthandBranchLabel node={node} options={options} />
          </BranchControl>
          <BranchContent className={options.branchClassNames?.content}>
            <BranchIndentGuide
              className={options.branchClassNames?.indentGuide}
            />
            {node.children.map((child, index) => (
              <ShorthandNode
                indexPath={[...indexPath, index]}
                key={child.id}
                node={child}
                options={options}
              />
            ))}
          </BranchContent>
        </Branch>
      ) : (
        <Item className={options.classNames?.control}>
          <ShorthandCheckbox options={options} />
          <ShorthandItemLabel node={node} options={options} />
        </Item>
      )}
    </NodeProvider>
  );
}

function ShorthandBranchLabel({
  node,
  options,
}: {
  node: TreeNodeType;
  options: ShorthandOptions;
}) {
  const { expanded, renaming } = useTreeViewNodeContext();

  if (renaming) {
    return <NodeRenameInput className={options.itemClassNames?.renameInput} />;
  }

  const icon = expanded
    ? node.expandedIcon !== undefined
      ? node.expandedIcon
      : options.branchExpandedIcon !== undefined
        ? options.branchExpandedIcon
        : FolderOpenIcon
    : node.icon !== undefined
      ? node.icon
      : options.branchIcon !== undefined
        ? options.branchIcon
        : FolderIcon;

  return (
    <BranchText className={options.branchClassNames?.title}>
      <ShorthandCheckbox options={options} />
      <NodeIcon className={options.itemClassNames?.icon} icon={icon} />
      {node.name}
    </BranchText>
  );
}

function ShorthandItemLabel({
  node,
  options,
}: {
  node: TreeNodeType;
  options: ShorthandOptions;
}) {
  const { renaming, value } = useTreeViewNodeContext();
  const extension = getFileExtension(value);
  const icon =
    node.icon !== undefined
      ? node.icon
      : ((extension ? options.fileIcons?.[extension] : undefined) ??
        options.itemIcon ??
        FileIcon);

  return (
    <>
      <NodeIcon className={options.itemClassNames?.icon} icon={icon} />
      {renaming ? (
        <NodeRenameInput className={options.itemClassNames?.renameInput} />
      ) : (
        <ItemText className={options.itemClassNames?.title}>
          {node.name}
        </ItemText>
      )}
    </>
  );
}

export function TreeViewShorthand<T extends TreeNodeType = TreeNodeType>({
  branchClassNames,
  branchExpandedIcon,
  branchIcon,
  checkbox = false,
  classNames,
  fileIcons,
  itemClassNames,
  itemIcon,
  label,
  ...rest
}: TreeViewProps<T>) {
  const options: ShorthandOptions = {
    branchClassNames,
    branchExpandedIcon,
    branchIcon,
    checkbox,
    classNames,
    fileIcons,
    itemClassNames,
    itemIcon,
  };

  return (
    <Root {...rest}>
      {label ? <Label className={classNames?.label}>{label}</Label> : null}
      <Tree className={classNames?.tree}>
        {rest.collection.rootNode.children?.map((node, index) => (
          <ShorthandNode
            indexPath={[index]}
            key={node.id}
            node={node}
            options={options}
          />
        ))}
      </Tree>
    </Root>
  );
}
// #endregion

// #region Display Names
Item.displayName = "TreeView.Item";
ItemText.displayName = "TreeView.ItemText";
NodeCheckbox.displayName = "TreeView.NodeCheckbox";
NodeProvider.displayName = "TreeView.NodeProvider";
NodeRenameInput.displayName = "TreeView.NodeRenameInput";
TreeViewShorthand.displayName = "TreeView";
// #endregion

export const TreeView = Object.assign(TreeViewShorthand, {
  Branch,
  BranchContent,
  BranchControl,
  BranchIndentGuide,
  BranchIndicator,
  BranchText,
  BranchTrigger,
  Context: TreeViewPrimitive.Context,
  Item,
  ItemText,
  Label,
  NodeCheckbox,
  NodeCheckboxIndicator,
  NodeContext: TreeViewPrimitive.NodeContext,
  NodeProvider,
  NodeRenameInput,
  Root,
  Tree,
});
