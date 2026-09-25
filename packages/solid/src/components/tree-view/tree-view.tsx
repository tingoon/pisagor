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
import { formControlToggleRecipe } from "@pisagor/recipes/form-control";
import {
  treeViewBranchRecipe,
  treeViewItemRecipe,
  treeViewRecipe,
} from "@pisagor/recipes/tree-view";
import { cn } from "@pisagor/utils";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import {
  CaretRightIcon,
  CheckIcon,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  MinusIcon,
} from "../../internal/icons";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import {
  TreeViewBranchContext,
  TreeViewContext,
  type TreeViewContextProps,
  TreeViewItemContext,
  useTreeView,
  useTreeViewBranch,
  useTreeViewItem,
} from "./tree-view.context";

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
    TreeViewContextProps {
  recipe?: typeof treeViewRecipe;
}

export interface TreeViewBranchProps extends TreeViewPrimitiveBranchProps {
  branchRecipe?: typeof treeViewBranchRecipe;
}

export interface TreeViewItemProps extends TreeViewPrimitiveItemProps {
  itemRecipe?: typeof treeViewItemRecipe;
}

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
  const [local, rest] = splitProps(props, [
    "children",
    "fileIcons",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? treeViewRecipe)();

  return (
    <TreeViewContext value={{ fileIcons: local.fileIcons, slots: slots() }}>
      <TreeViewPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
      >
        {local.children}
      </TreeViewPrimitive.Root>
    </TreeViewContext>
  );
}

export function TreeViewLabel(props: TreeViewLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTreeView();
  return (
    <TreeViewPrimitive.Label
      {...rest}
      class={slots.label({ class: cn(local.class) })}
    />
  );
}

export function TreeViewTree(props: TreeViewTreeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTreeView();
  return (
    <TreeViewPrimitive.Tree
      {...rest}
      class={slots.tree({ class: cn(local.class) })}
    />
  );
}

export function TreeViewNodeProvider<T extends TreeNodeType>(
  props: NodeProviderProps<T>,
): JSX.Element {
  return <TreeViewPrimitive.NodeProvider {...props} />;
}

export function TreeViewBranch(props: TreeViewBranchProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "branchRecipe",
    "class",
  ]);
  const slots = () => (local.branchRecipe ?? treeViewBranchRecipe)();

  return (
    <TreeViewBranchContext value={{ slots: slots() }}>
      <TreeViewPrimitive.Branch
        {...rest}
        class={slots().base({ class: cn(local.class) })}
      >
        {local.children}
      </TreeViewPrimitive.Branch>
    </TreeViewBranchContext>
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
  const { slots } = useTreeView();

  return (
    <TreeViewPrimitive.BranchControl
      {...rest}
      class={slots.control({ class: cn(local.class) })}
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
  const { slots } = useTreeViewBranch();
  const Icon = () => local.icon;
  const ExpandedIcon = () => local.expandedIcon;

  return (
    <TreeViewPrimitive.NodeContext>
      {(nodeState) => (
        <Show
          fallback={
            <TreeViewPrimitive.BranchText
              {...rest}
              class={slots.title({ class: cn(local.class) })}
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
  const { slots } = useTreeViewBranch();

  return (
    <TreeViewPrimitive.BranchIndicator
      {...rest}
      class={slots.indicator({ class: cn(local.class) })}
    >
      <CaretRightIcon />
    </TreeViewPrimitive.BranchIndicator>
  );
}

export function TreeViewBranchContent(
  props: TreeViewBranchContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useTreeViewBranch();

  return (
    <TreeViewPrimitive.BranchContent
      {...rest}
      class={slots.content({ class: cn(local.class) })}
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
  const { slots } = useTreeViewBranch();
  return (
    <TreeViewPrimitive.BranchIndentGuide
      {...rest}
      class={slots.indentGuide({ class: cn(local.class) })}
    />
  );
}

export function TreeViewItem(props: TreeViewItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "itemRecipe", "class"]);
  const { slots } = useTreeView();
  const itemSlots = () => (local.itemRecipe ?? treeViewItemRecipe)();

  return (
    <TreeViewItemContext value={{ slots: itemSlots() }}>
      <TreeViewPrimitive.Item
        {...rest}
        class={slots.control({ class: cn(local.class) })}
      >
        {local.children}
      </TreeViewPrimitive.Item>
    </TreeViewItemContext>
  );
}

export function TreeViewItemText(props: TreeViewItemTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "icon", "class"]);
  const { fileIcons } = useTreeView();
  const Icon = () => local.icon ?? FileIcon;

  const getFileIcon = (value: string): Component => {
    const extension = getFileExtension(value);
    const resolved = extension ? fileIcons?.[extension] : undefined;
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
  const item = useTreeViewItem();
  const slots = item?.slots ?? treeViewItemRecipe();

  return (
    <ark.span
      {...rest}
      class={slots.icon({ class: cn(local.class) })}
      data-part="item-icon"
      data-scope="tree-view"
    />
  );
}

function TreeViewItemTitle(props: TreeViewItemTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const item = useTreeViewItem();
  const slots = item?.slots ?? treeViewItemRecipe();
  return (
    <TreeViewPrimitive.ItemText
      {...rest}
      class={slots.title({ class: cn(local.class) })}
    />
  );
}

export function TreeViewNodeCheckbox(
  props: TreeViewNodeCheckboxProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const item = useTreeViewItem();
  const slots = item?.slots ?? treeViewItemRecipe();
  const surfaceVariant = useFormControlSurface();

  return (
    <TreeViewPrimitive.NodeCheckbox
      {...rest}
      class={cn(
        formControlToggleRecipe({ surfaceVariant }),
        slots.checkbox(),
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
  const item = useTreeViewItem();
  const slots = item?.slots ?? treeViewItemRecipe();
  return (
    <TreeViewPrimitive.NodeRenameInput
      {...rest}
      class={slots.renameInput({ class: cn(local.class) })}
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
