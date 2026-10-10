import { ark } from "@ark-ui/solid/factory";
import type {
  TreeCollection as arkTreeCollection,
  TreeViewBranchContentProps,
  TreeViewBranchIndentGuideProps,
  TreeViewBranchIndicatorProps,
  TreeViewBranchTextProps,
  TreeViewLabelProps,
  TreeViewNodeCheckboxProps,
  TreeViewNodeProviderProps,
  TreeViewNodeRenameInputProps,
  TreeViewBranchControlProps as TreeViewPrimitiveBranchControlProps,
  TreeViewBranchProps as TreeViewPrimitiveBranchProps,
  TreeViewItemProps as TreeViewPrimitiveItemProps,
  TreeViewItemTextProps as TreeViewPrimitiveItemTextProps,
  TreeViewRootComponentProps,
  TreeViewTreeProps,
} from "@ark-ui/solid/tree-view";
import {
  createTreeCollection as arkCreateTreeCollection,
  TreeView as TreeViewPrimitive,
} from "@ark-ui/solid/tree-view";
import type {
  TreeViewBranchProps as BaseTreeViewBranchProps,
  TreeViewItemProps as BaseTreeViewItemProps,
  TreeViewProps as BaseTreeViewProps,
} from "@pisagor/props";
import {
  formControlToggleRecipe,
  treeViewBranchRecipe,
  treeViewItemRecipe,
  treeViewRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps, useContext } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import {
  CaretRightIcon,
  CheckIcon,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  MinusIcon,
} from "../internal/icons";
import { createContext } from "../utils";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: TreeViewStylesContext, useStyles: useTreeView } =
  createSlotRecipeContext({ name: "TreeView", recipe: treeViewRecipe });

export interface TreeViewContextProps {
  fileIcons?: Record<string, Component | null>;
}

const { TreeViewFileIconsContext, useTreeViewFileIcons } =
  createContext("TreeViewFileIcons")<TreeViewContextProps>();

const { Context: TreeViewBranchStylesContext, useStyles: useTreeViewBranch } =
  createSlotRecipeContext({ name: "TreeView", recipe: treeViewBranchRecipe });

const { Context: TreeViewItemStylesContext } = createSlotRecipeContext({
  name: "TreeView",
  recipe: treeViewItemRecipe,
});

/** Item parts may render outside Item, so fall back to the default recipe. */
function useTreeViewItemSlots() {
  const styles = useContext(TreeViewItemStylesContext);
  return () => styles?.slots ?? treeViewItemRecipe();
}
// #endregion

export interface TreeNodeType<T = unknown> {
  children?: TreeNodeType<T>[] | undefined;
  expandedIcon?: Component | null;
  icon?: Component | null;
  id: string;
  name: string;
}

export type TreeCollection = arkTreeCollection;

export interface TreeViewProps
  extends TreeViewRootComponentProps,
    TreeViewContextProps,
    BaseTreeViewProps {}

export interface TreeViewBranchProps
  extends TreeViewPrimitiveBranchProps,
    BaseTreeViewBranchProps {}

export interface TreeViewItemProps
  extends TreeViewPrimitiveItemProps,
    BaseTreeViewItemProps {}

export type NodeProviderProps<T extends TreeNodeType = TreeNodeType> =
  TreeViewNodeProviderProps<T>;

export type TreeViewBranchControlProps = TreeViewPrimitiveBranchControlProps &
  Pick<TreeViewBranchTitleProps, "icon" | "expandedIcon">;

export interface TreeViewBranchTitleProps extends TreeViewBranchTextProps {
  expandedIcon?: Component | null;
  icon?: Component | null;
}

export type TreeViewItemTitleProps = TreeViewPrimitiveItemTextProps;

export interface TreeViewItemTextProps extends TreeViewItemTitleProps {
  icon?: Component;
}

export type TreeViewNodeInputProps = TreeViewNodeRenameInputProps;

type TreeViewItemIconProps = ComponentProps<typeof ark.span>;

export const createTreeCollection = <T extends TreeNodeType>(
  options: Parameters<typeof arkCreateTreeCollection<T>>[0],
) =>
  arkCreateTreeCollection<T>({
    nodeToString: (node) => node.name,
    nodeToValue: (node) => node.id,
    ...options,
  });

export function TreeViewRoot(props: TreeViewProps): JSX.Element {
  const [local, rest] = splitProps(props, ["fileIcons", "recipe", "class"]);

  const slots = createMemo(() => (local.recipe ?? treeViewRecipe)());

  return (
    <TreeViewStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <TreeViewFileIconsContext
        value={{
          get fileIcons() {
            return local.fileIcons;
          },
        }}
      >
        <TreeViewPrimitive.Root
          {...rest}
          class={slots().base({ class: local.class })}
        />
      </TreeViewFileIconsContext>
    </TreeViewStylesContext>
  );
}

export function TreeViewLabel(props: TreeViewLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useTreeView();

  return (
    <TreeViewPrimitive.Label
      {...rest}
      class={styles.slots.label({ class: local.class })}
    />
  );
}

export function TreeViewTree(props: TreeViewTreeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useTreeView();

  return (
    <TreeViewPrimitive.Tree
      {...rest}
      class={styles.slots.tree({ class: local.class })}
    />
  );
}

export function TreeViewNodeProvider<T extends TreeNodeType>(
  props: NodeProviderProps<T>,
): JSX.Element {
  return <TreeViewPrimitive.NodeProvider {...props} />;
}

export function TreeViewBranch(props: TreeViewBranchProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  const slots = createMemo(() => (local.recipe ?? treeViewBranchRecipe)());

  return (
    <TreeViewBranchStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <TreeViewPrimitive.Branch
        {...rest}
        class={slots().base({ class: local.class })}
      />
    </TreeViewBranchStylesContext>
  );
}

export function TreeViewBranchControl(
  props: TreeViewBranchControlProps,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "expandedIcon",
    "icon",
    "class",
  ]);
  const styles = useTreeView();

  return (
    <TreeViewPrimitive.BranchControl
      {...rest}
      class={styles.slots.control({ class: local.class })}
    >
      <TreeViewBranchIndicator />
      <TreeViewBranchTitle expandedIcon={local.expandedIcon} icon={local.icon}>
        {local.children}
      </TreeViewBranchTitle>
    </TreeViewPrimitive.BranchControl>
  );
}

function TreeViewBranchTitle(props: TreeViewBranchTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "expandedIcon",
    "icon",
    "class",
  ]);
  const styles = useTreeViewBranch();
  const Icon = () => local.icon;
  const ExpandedIcon = () => local.expandedIcon;

  return (
    <TreeViewPrimitive.NodeContext>
      {(nodeState) => (
        <Show
          fallback={
            <TreeViewPrimitive.BranchText
              {...rest}
              class={styles.slots.title({ class: local.class })}
            >
              <Show when={Icon() !== null && !nodeState().expanded}>
                <TreeViewItemIcon>
                  <Show fallback={<FolderIcon />} when={Icon()}>
                    {(Comp) => {
                      const C = Comp();
                      return C ? <C /> : null;
                    }}
                  </Show>
                </TreeViewItemIcon>
              </Show>
              <Show when={ExpandedIcon() !== null && nodeState().expanded}>
                <TreeViewItemIcon>
                  <Show fallback={<FolderOpenIcon />} when={ExpandedIcon()}>
                    {(Comp) => {
                      const C = Comp();
                      return C ? <C /> : null;
                    }}
                  </Show>
                </TreeViewItemIcon>
              </Show>
              {local.children}
            </TreeViewPrimitive.BranchText>
          }
          when={nodeState().renaming}
        >
          <TreeViewNodeInput />
        </Show>
      )}
    </TreeViewPrimitive.NodeContext>
  );
}

export function TreeViewBranchIndicator(
  props: TreeViewBranchIndicatorProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useTreeViewBranch();

  return (
    <TreeViewPrimitive.BranchIndicator
      {...rest}
      class={styles.slots.indicator({ class: local.class })}
    >
      <CaretRightIcon />
    </TreeViewPrimitive.BranchIndicator>
  );
}

export function TreeViewBranchContent(
  props: TreeViewBranchContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useTreeViewBranch();

  return (
    <TreeViewPrimitive.BranchContent
      {...rest}
      class={styles.slots.content({ class: local.class })}
    >
      <TreeViewBranchIndentGuide />
      {local.children}
    </TreeViewPrimitive.BranchContent>
  );
}

function TreeViewBranchIndentGuide(
  props: TreeViewBranchIndentGuideProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useTreeViewBranch();

  return (
    <TreeViewPrimitive.BranchIndentGuide
      {...rest}
      class={styles.slots.indentGuide({ class: local.class })}
    />
  );
}

export function TreeViewItem(props: TreeViewItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  const styles = useTreeView();

  const slots = createMemo(() => (local.recipe ?? treeViewItemRecipe)());

  return (
    <TreeViewItemStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <TreeViewPrimitive.Item
        {...rest}
        class={styles.slots.control({ class: local.class })}
      />
    </TreeViewItemStylesContext>
  );
}

export function TreeViewItemText(props: TreeViewItemTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "icon", "class"]);
  const files = useTreeViewFileIcons();
  const Icon = () => local.icon ?? FileIcon;

  const getFileIcon = (value: string): Component => {
    const extension = getFileExtension(value);
    const resolved = extension ? files.fileIcons?.[extension] : undefined;
    return resolved ?? Icon();
  };

  return (
    <TreeViewPrimitive.NodeContext>
      {(nodeState) => {
        const ResolvedIcon = getFileIcon(nodeState().value);
        return (
          <>
            <TreeViewItemIcon>
              <ResolvedIcon />
            </TreeViewItemIcon>
            <Show
              fallback={
                <TreeViewItemTitle {...rest} class={local.class}>
                  {local.children}
                </TreeViewItemTitle>
              }
              when={nodeState().renaming}
            >
              <TreeViewNodeInput />
            </Show>
          </>
        );
      }}
    </TreeViewPrimitive.NodeContext>
  );
}

function TreeViewItemIcon(props: TreeViewItemIconProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useTreeViewItemSlots();

  return (
    <ark.span
      {...rest}
      class={slots().icon({ class: local.class })}
      data-part="item-icon"
      data-scope="tree-view"
    />
  );
}

function TreeViewItemTitle(props: TreeViewItemTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useTreeViewItemSlots();
  return (
    <TreeViewPrimitive.ItemText
      {...rest}
      class={slots().title({ class: local.class })}
    />
  );
}

export function TreeViewNodeCheckbox(
  props: TreeViewNodeCheckboxProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useTreeViewItemSlots();
  const surfaceVariant = useFormControlSurface();

  return (
    <TreeViewPrimitive.NodeCheckbox
      {...rest}
      class={cn(
        formControlToggleRecipe({ surfaceVariant }),
        slots().checkbox(),
        local.class,
      )}
    >
      <TreeViewPrimitive.NodeCheckboxIndicator indeterminate={<MinusIcon />}>
        <CheckIcon />
      </TreeViewPrimitive.NodeCheckboxIndicator>
    </TreeViewPrimitive.NodeCheckbox>
  );
}

function TreeViewNodeInput(props: TreeViewNodeInputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useTreeViewItemSlots();
  return (
    <TreeViewPrimitive.NodeRenameInput
      {...rest}
      class={slots().renameInput({ class: local.class })}
    />
  );
}

type CreateFileIconsArgs = Record<`.${string}`, Component | null>;

export const createFileIcons = (args: CreateFileIconsArgs) => ({ ...args });

const getFileExtension = (file: string) => {
  const name = file.includes(".")
    ? file.split(".").at(-1)?.toLowerCase()
    : null;
  return name ? `.${name}` : null;
};

export type {
  TreeViewBranchContentProps,
  TreeViewBranchIndentGuideProps,
  TreeViewBranchIndicatorProps,
  TreeViewLabelProps,
  TreeViewNodeCheckboxProps,
  TreeViewNodeRenameInputProps,
  TreeViewTreeProps,
} from "@ark-ui/solid/tree-view";

export const TreeView = Object.assign(TreeViewRoot, {
  Branch: TreeViewBranch,
  BranchContent: TreeViewBranchContent,
  BranchControl: TreeViewBranchControl,
  BranchIndicator: TreeViewBranchIndicator,
  Item: TreeViewItem,
  ItemText: TreeViewItemText,
  Label: TreeViewLabel,
  NodeCheckbox: TreeViewNodeCheckbox,
  NodeProvider: TreeViewNodeProvider,
  Tree: TreeViewTree,
});
