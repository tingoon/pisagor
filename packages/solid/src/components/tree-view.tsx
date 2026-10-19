import {
  TreeView as TreeViewPrimitive,
  createTreeCollection as arkCreateTreeCollection,
  useTreeViewNodeContext,
} from "@ark-ui/solid";
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
  TreeViewNodeProviderProps,
  TreeViewNodeRenameInputProps,
  TreeViewRootComponent,
  TreeViewRootProps as TreeViewRootPrimitiveProps,
  TreeViewTreeProps,
} from "@ark-ui/solid";
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
import type { Component, JSX } from "solid-js";
import { For, Show, splitProps, useContext } from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  CaretRightIcon,
  CheckIcon,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  MinusIcon,
  createSlotRecipeContext,
} from "../internal";
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
  const item = useContext(TreeViewItemStylesContext);

  return () => item?.slots ?? treeViewItemRecipe();
}
// #endregion

// #region Types
export interface TreeNodeType<T = unknown> {
  children?: TreeNodeType<T>[] | undefined;
  expandedIcon?: Component | null;
  icon?: Component | null;
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
  branchIcon?: Component | null;
  /**
   * Default open-folder icon (`null` hides it). A node's own `expandedIcon`
   * wins.
   *
   * @defaultValue FolderOpenIcon
   */
  branchExpandedIcon?: Component | null;
  /**
   * Whether to render a checkbox per node (use with `checkedValue`).
   *
   * @defaultValue false
   */
  checkbox?: boolean;
  /** Icons by file extension (see `createFileIcons`). */
  fileIcons?: Record<string, Component | null>;
  /**
   * Default file icon. A node's own `icon` or a `fileIcons` match wins.
   *
   * @defaultValue FileIcon
   */
  itemIcon?: Component;
  /** Visible label rendered above the tree. */
  label?: JSX.Element;
}

export type TreeViewBranchProps = TreeViewBranchPrimitiveProps &
  TreeViewBranchRootContract;

export type TreeViewItemProps = TreeViewItemPrimitiveProps &
  TreeViewItemRootContract;

export type NodeProviderProps<T extends TreeNodeType = TreeNodeType> =
  TreeViewNodeProviderProps<T>;

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

type CreateFileIconsArgs = Record<`.${string}`, Component | null>;

export const createFileIcons = (args: CreateFileIconsArgs) => ({ ...args });

const Root = withProvider<TreeViewRootProps>(TreeViewPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as TreeViewRootComponent<TreeViewRootContract>;

const Label = withContext<TreeViewLabelProps>(TreeViewPrimitive.Label, {
  name: "Label",
});

const Tree = withContext<TreeViewTreeProps>(TreeViewPrimitive.Tree, {
  name: "Tree",
});

function NodeProvider<T extends TreeNodeType>(
  props: NodeProviderProps<T>,
): JSX.Element {
  return <TreeViewPrimitive.NodeProvider {...props} />;
}

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
function Item(props: TreeViewItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <ItemBase {...rest} class={styles.slots.control({ class: local.class })} />
  );
}

/** Item text; styled by the item recipe `title` slot. */
function ItemText(props: TreeViewItemTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useItemSlots();

  return (
    <TreeViewPrimitive.ItemText
      {...rest}
      class={slots().title({ class: local.class })}
    />
  );
}

/** Node checkbox; render `NodeCheckboxIndicator` with your icons inside. */
function NodeCheckbox(props: TreeViewNodeCheckboxProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useItemSlots();
  const surfaceVariant = useFormControlSurface();

  return (
    <TreeViewPrimitive.NodeCheckbox
      {...rest}
      class={cn(
        formControlToggleRecipe({ surfaceVariant }),
        slots().checkbox(),
        local.class,
      )}
    />
  );
}

const NodeCheckboxIndicator = TreeViewPrimitive.NodeCheckboxIndicator;

/** Rename input; styled by the item recipe `renameInput` slot. */
function NodeRenameInput(props: TreeViewNodeRenameInputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useItemSlots();

  return (
    <TreeViewPrimitive.NodeRenameInput
      {...rest}
      class={slots().renameInput({ class: local.class })}
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

function NodeIcon(props: {
  class?: string;
  icon: Component | null;
}): JSX.Element {
  const slots = useItemSlots();

  return (
    <Show when={props.icon}>
      {(icon) => (
        <span
          class={slots().icon({ class: props.class })}
          data-part="item-icon"
          data-scope="tree-view"
        >
          <Dynamic component={icon()} />
        </span>
      )}
    </Show>
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

function ShorthandCheckbox(props: { options: ShorthandOptions }): JSX.Element {
  return (
    <Show when={props.options.checkbox}>
      <NodeCheckbox class={props.options.itemClassNames?.checkbox}>
        <NodeCheckboxIndicator indeterminate={<MinusIcon />}>
          <CheckIcon />
        </NodeCheckboxIndicator>
      </NodeCheckbox>
    </Show>
  );
}

function ShorthandNode(props: {
  indexPath: number[];
  node: TreeNodeType;
  options: ShorthandOptions;
}): JSX.Element {
  return (
    <NodeProvider indexPath={props.indexPath} node={props.node}>
      <Show
        fallback={
          <Item class={props.options.classNames?.control}>
            <ShorthandCheckbox options={props.options} />
            <ShorthandItemLabel node={props.node} options={props.options} />
          </Item>
        }
        when={props.node.children}
      >
        {(children) => (
          <Branch class={props.options.branchClassNames?.base}>
            <BranchControl class={props.options.classNames?.control}>
              <BranchIndicator
                class={props.options.branchClassNames?.indicator}
              >
                <CaretRightIcon />
              </BranchIndicator>
              <ShorthandBranchLabel node={props.node} options={props.options} />
            </BranchControl>
            <BranchContent class={props.options.branchClassNames?.content}>
              <BranchIndentGuide
                class={props.options.branchClassNames?.indentGuide}
              />
              <For each={children()}>
                {(child, index) => (
                  <ShorthandNode
                    indexPath={[...props.indexPath, index()]}
                    node={child}
                    options={props.options}
                  />
                )}
              </For>
            </BranchContent>
          </Branch>
        )}
      </Show>
    </NodeProvider>
  );
}

function ShorthandBranchLabel(props: {
  node: TreeNodeType;
  options: ShorthandOptions;
}): JSX.Element {
  const nodeState = useTreeViewNodeContext();
  const icon = () => {
    if (nodeState().expanded) {
      if (props.node.expandedIcon !== undefined) {
        return props.node.expandedIcon;
      }

      return props.options.branchExpandedIcon !== undefined
        ? props.options.branchExpandedIcon
        : FolderOpenIcon;
    }
    if (props.node.icon !== undefined) {
      return props.node.icon;
    }

    return props.options.branchIcon !== undefined
      ? props.options.branchIcon
      : FolderIcon;
  };

  return (
    <Show
      fallback={
        <BranchText class={props.options.branchClassNames?.title}>
          <ShorthandCheckbox options={props.options} />
          <NodeIcon class={props.options.itemClassNames?.icon} icon={icon()} />
          {props.node.name}
        </BranchText>
      }
      when={nodeState().renaming}
    >
      <NodeRenameInput class={props.options.itemClassNames?.renameInput} />
    </Show>
  );
}

function ShorthandItemLabel(props: {
  node: TreeNodeType;
  options: ShorthandOptions;
}): JSX.Element {
  const nodeState = useTreeViewNodeContext();
  const icon = () => {
    if (props.node.icon !== undefined) {
      return props.node.icon;
    }
    const extension = getFileExtension(nodeState().value);

    return (
      (extension ? props.options.fileIcons?.[extension] : undefined) ??
      props.options.itemIcon ??
      FileIcon
    );
  };

  return (
    <>
      <NodeIcon class={props.options.itemClassNames?.icon} icon={icon()} />
      <Show
        fallback={
          <ItemText class={props.options.itemClassNames?.title}>
            {props.node.name}
          </ItemText>
        }
        when={nodeState().renaming}
      >
        <NodeRenameInput class={props.options.itemClassNames?.renameInput} />
      </Show>
    </>
  );
}

export function TreeViewShorthand<T extends TreeNodeType = TreeNodeType>(
  props: TreeViewProps<T>,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "branchClassNames",
    "branchExpandedIcon",
    "branchIcon",
    "checkbox",
    "classNames",
    "fileIcons",
    "itemClassNames",
    "itemIcon",
    "label",
  ]);
  const options: ShorthandOptions = {
    get branchClassNames() {
      return local.branchClassNames;
    },
    get branchExpandedIcon() {
      return local.branchExpandedIcon;
    },
    get branchIcon() {
      return local.branchIcon;
    },
    get checkbox() {
      return local.checkbox ?? false;
    },
    get classNames() {
      return local.classNames;
    },
    get fileIcons() {
      return local.fileIcons;
    },
    get itemClassNames() {
      return local.itemClassNames;
    },
    get itemIcon() {
      return local.itemIcon;
    },
  };

  return (
    <Root {...rest}>
      <Show when={local.label}>
        <Label class={local.classNames?.label}>{local.label}</Label>
      </Show>
      <Tree class={local.classNames?.tree}>
        <For each={rest.collection.rootNode.children}>
          {(node, index) => (
            <ShorthandNode
              indexPath={[index()]}
              node={node}
              options={options}
            />
          )}
        </For>
      </Tree>
    </Root>
  );
}
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
