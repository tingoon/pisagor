import {
  type TreeCollection as ArkTreeCollection,
  createTreeCollection as arkCreateTreeCollection,
  TreeView as TreeViewPrimitive,
} from "@ark-ui/vue";
import {
  PhCaretRight,
  PhCheck,
  PhFile,
  PhFolder,
  PhFolderOpen,
  PhMinus,
} from "@phosphor-icons/vue";
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
import {
  type Component,
  defineComponent,
  h,
  type PropType,
  type VNode,
} from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { contentProp, slotOrProp } from "../internal/shorthand";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "TreeView",
  recipe: treeViewRecipe,
});

const { withContext: withBranchContext, withProvider: withBranchProvider } =
  createSlotRecipeContext({
    name: "TreeView",
    recipe: treeViewBranchRecipe,
  });

const {
  useOptionalStyles: useOptionalItemStyles,
  withProvider: withItemProvider,
} = createSlotRecipeContext({
  name: "TreeView",
  recipe: treeViewItemRecipe,
});

/** Item styles when inside `Item`, default item styles otherwise (branches). */
function useItemSlots() {
  const styles = useOptionalItemStyles();

  return () => styles?.slots ?? treeViewItemRecipe();
}
// #endregion

// #region Types
type ArkPart = Parameters<typeof h>[0];

type TreeIcon = Component | null;

export interface TreeNodeType<T = unknown> {
  children?: TreeNodeType<T>[] | undefined;
  expandedIcon?: TreeIcon;
  icon?: TreeIcon;
  id: string;
  name: string;
}

export type TreeCollection = ArkTreeCollection;

export type TreeViewRootProps = TreeViewRootContract;

export interface TreeViewProps extends TreeViewRootProps, TreeViewContract {
  /**
   * Default open-folder icon (`null` hides it). A node's own `expandedIcon`
   * wins.
   *
   * @defaultValue PhFolderOpen
   */
  branchExpandedIcon?: TreeIcon;
  /**
   * Default folder icon (`null` hides it). A node's own `icon` wins.
   *
   * @defaultValue PhFolder
   */
  branchIcon?: TreeIcon;
  /**
   * Whether to render a checkbox per node (use with `checkedValue`).
   *
   * @defaultValue false
   */
  checkbox?: boolean;
  /** The tree to render (see `createTreeCollection`). */
  collection: TreeCollection;
  /** Icons by file extension (see `createFileIcons`). */
  fileIcons?: Record<string, TreeIcon>;
  /**
   * Default file icon. A node's own `icon` or a `fileIcons` match wins.
   *
   * @defaultValue PhFile
   */
  itemIcon?: Component;
  /** Visible label rendered above the tree; also the `label` slot. */
  label?: string;
}

export type TreeViewBranchProps = TreeViewBranchRootContract;

export type TreeViewItemProps = TreeViewItemRootContract;

export interface NodeProviderProps<T extends TreeNodeType = TreeNodeType> {
  indexPath: number[];
  node: T;
}

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
} from "@ark-ui/vue";
// #endregion

// #region Helpers
export const createTreeCollection = <T extends TreeNodeType>(
  options: Parameters<typeof arkCreateTreeCollection<T>>[0],
) =>
  arkCreateTreeCollection<T>({
    nodeToString: (node) => node.name,
    nodeToValue: (node) => node.id,
    ...options,
  });

export const createFileIcons = (args: Record<`.${string}`, TreeIcon>) => ({
  ...args,
});

const getFileExtension = (file: string) => {
  const name = file.includes(".")
    ? file.split(".").at(-1)?.toLowerCase()
    : null;

  return name ? `.${name}` : null;
};
// #endregion

// #region Parts
export const TreeViewRoot = withProvider<TreeViewRootContract>(
  TreeViewPrimitive.Root,
  {
    defaultProps: { lazyMount: true, unmountOnExit: true },
    name: "Root",
    slot: "base",
  },
);

export const TreeViewLabel = withContext(TreeViewPrimitive.Label, {
  name: "Label",
});

export const TreeViewTree = withContext(TreeViewPrimitive.Tree, {
  name: "Tree",
});

/** Provides a node (`node` + `indexPath`) to the parts rendered inside it. */
export const TreeViewNodeProvider = defineComponent({
  inheritAttrs: false,
  name: "TreeView.NodeProvider",
  setup(_, { attrs, slots }) {
    return () =>
      h(TreeViewPrimitive.NodeProvider as unknown as ArkPart, attrs, slots);
  },
});

export const TreeViewBranch = withBranchProvider<TreeViewBranchRootContract>(
  TreeViewPrimitive.Branch,
  { name: "Branch", slot: "base" },
);

export const TreeViewBranchControl = withContext(
  TreeViewPrimitive.BranchControl,
  { name: "BranchControl", slot: "control" },
);

export const TreeViewBranchIndicator = withBranchContext(
  TreeViewPrimitive.BranchIndicator,
  { name: "BranchIndicator", slot: "indicator" },
);

export const TreeViewBranchText = withBranchContext(
  TreeViewPrimitive.BranchText,
  { name: "BranchText", slot: "title" },
);

export const TreeViewBranchTrigger = withBranchContext(
  TreeViewPrimitive.BranchTrigger,
  { name: "BranchTrigger", slot: "trigger" },
);

export const TreeViewBranchContent = withBranchContext(
  TreeViewPrimitive.BranchContent,
  { name: "BranchContent", slot: "content" },
);

export const TreeViewBranchIndentGuide = withBranchContext(
  TreeViewPrimitive.BranchIndentGuide,
  { name: "BranchIndentGuide", slot: "indentGuide" },
);

const ItemBase = withItemProvider<TreeViewItemRootContract>(
  TreeViewPrimitive.Item,
  { name: "Item", slot: "base" },
);

/** Item; shares the row (`control`) styles with `BranchControl`. */
export const TreeViewItem = defineComponent({
  inheritAttrs: false,
  name: "TreeView.Item",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ItemBase as ArkPart,
        { ...attrs, class: styles.slots.control({ class: cn(props.class) }) },
        slots,
      );
  },
});

/** Item text; styled by the item recipe `title` slot. */
export const TreeViewItemText = defineComponent({
  inheritAttrs: false,
  name: "TreeView.ItemText",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const getSlots = useItemSlots();

    return () =>
      h(
        TreeViewPrimitive.ItemText as ArkPart,
        { ...attrs, class: getSlots().title({ class: cn(props.class) }) },
        slots,
      );
  },
});

/** Node checkbox; render `NodeCheckboxIndicator` with your icons inside. */
export const TreeViewNodeCheckbox = defineComponent({
  inheritAttrs: false,
  name: "TreeView.NodeCheckbox",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const getSlots = useItemSlots();
    const surfaceVariant = useFormControlSurface();

    return () =>
      h(
        TreeViewPrimitive.NodeCheckbox as ArkPart,
        {
          ...attrs,
          class: cn(
            formControlToggleRecipe({ surfaceVariant }),
            getSlots().checkbox(),
            props.class,
          ),
        },
        slots,
      );
  },
});

export const TreeViewNodeCheckboxIndicator =
  TreeViewPrimitive.NodeCheckboxIndicator;

/** Rename input; styled by the item recipe `renameInput` slot. */
export const TreeViewNodeRenameInput = defineComponent({
  inheritAttrs: false,
  name: "TreeView.NodeRenameInput",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    const getSlots = useItemSlots();

    return () =>
      h(TreeViewPrimitive.NodeRenameInput as ArkPart, {
        ...attrs,
        class: getSlots().renameInput({ class: cn(props.class) }),
      });
  },
});
// #endregion

// #region Shorthand
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

interface NodeState {
  expanded?: boolean;
  renaming?: boolean;
  value: string;
}

const NodeIcon = defineComponent({
  name: "TreeView.NodeIcon",
  props: {
    class: { default: undefined, type: String },
    icon: { default: null, type: [Object, Function] as PropType<TreeIcon> },
  },
  setup(props) {
    const getSlots = useItemSlots();

    return () =>
      props.icon
        ? h(
            "span",
            {
              class: getSlots().icon({ class: props.class }),
              "data-part": "item-icon",
              "data-scope": "tree-view",
            },
            h(props.icon),
          )
        : null;
  },
});

function renderCheckbox(options: ShorthandOptions) {
  if (!options.checkbox) {
    return null;
  }

  return h(
    TreeViewNodeCheckbox,
    { class: options.itemClassNames?.checkbox },
    () =>
      h(
        TreeViewNodeCheckboxIndicator as ArkPart,
        { indeterminate: h(PhMinus) },
        () => h(PhCheck),
      ),
  );
}

/** Reads the node state (expanded, renaming, value) inside `NodeProvider`. */
function withNodeState(render: (state: NodeState) => VNode | VNode[] | null) {
  return h(TreeViewPrimitive.NodeContext as ArkPart, null, {
    default: (state: NodeState) => render(state),
  });
}

function renderBranchLabel(node: TreeNodeType, options: ShorthandOptions) {
  return withNodeState(({ expanded, renaming }) => {
    if (renaming) {
      return h(TreeViewNodeRenameInput, {
        class: options.itemClassNames?.renameInput,
      });
    }

    const icon = expanded
      ? node.expandedIcon !== undefined
        ? node.expandedIcon
        : options.branchExpandedIcon !== undefined
          ? options.branchExpandedIcon
          : PhFolderOpen
      : node.icon !== undefined
        ? node.icon
        : options.branchIcon !== undefined
          ? options.branchIcon
          : PhFolder;

    return h(
      TreeViewBranchText,
      { class: options.branchClassNames?.title },
      () => [
        renderCheckbox(options),
        h(NodeIcon, { class: options.itemClassNames?.icon, icon }),
        node.name,
      ],
    );
  });
}

function renderItemLabel(node: TreeNodeType, options: ShorthandOptions) {
  return withNodeState(({ renaming, value }) => {
    const extension = getFileExtension(value);
    const icon =
      node.icon !== undefined
        ? node.icon
        : ((extension ? options.fileIcons?.[extension] : undefined) ??
          options.itemIcon ??
          PhFile);

    return [
      h(NodeIcon, { class: options.itemClassNames?.icon, icon }),
      renaming
        ? h(TreeViewNodeRenameInput, {
            class: options.itemClassNames?.renameInput,
          })
        : h(
            TreeViewItemText,
            { class: options.itemClassNames?.title },
            () => node.name,
          ),
    ];
  });
}

function renderNode(
  node: TreeNodeType,
  indexPath: number[],
  options: ShorthandOptions,
): VNode {
  return h(TreeViewNodeProvider, { indexPath, key: node.id, node }, () =>
    node.children
      ? h(
          TreeViewBranch as ArkPart,
          { class: options.branchClassNames?.base },
          () => [
            h(
              TreeViewBranchControl,
              { class: options.classNames?.control },
              () => [
                h(
                  TreeViewBranchIndicator,
                  { class: options.branchClassNames?.indicator },
                  () => h(PhCaretRight),
                ),
                renderBranchLabel(node, options),
              ],
            ),
            h(
              TreeViewBranchContent,
              { class: options.branchClassNames?.content },
              () => [
                h(TreeViewBranchIndentGuide, {
                  class: options.branchClassNames?.indentGuide,
                }),
                ...(node.children ?? []).map((child, index) =>
                  renderNode(child, [...indexPath, index], options),
                ),
              ],
            ),
          ],
        )
      : h(TreeViewItem, { class: options.classNames?.control }, () => [
          renderCheckbox(options),
          renderItemLabel(node, options),
        ]),
  );
}

export const TreeViewShorthand = defineComponent({
  inheritAttrs: false,
  name: "TreeView",
  props: {
    branchClassNames: {
      default: undefined,
      type: Object as PropType<TreeViewProps["branchClassNames"]>,
    },
    branchExpandedIcon: {
      default: undefined,
      type: [Object, Function] as PropType<TreeIcon>,
    },
    branchIcon: {
      default: undefined,
      type: [Object, Function] as PropType<TreeIcon>,
    },
    checkbox: { default: false, type: Boolean },
    classNames: {
      default: undefined,
      type: Object as PropType<TreeViewProps["classNames"]>,
    },
    collection: {
      required: true,
      type: Object as PropType<TreeCollection>,
    },
    fileIcons: {
      default: undefined,
      type: Object as PropType<Record<string, TreeIcon>>,
    },
    itemClassNames: {
      default: undefined,
      type: Object as PropType<TreeViewProps["itemClassNames"]>,
    },
    itemIcon: {
      default: undefined,
      type: [Object, Function] as PropType<Component>,
    },
    label: contentProp,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const options: ShorthandOptions = {
        branchClassNames: props.branchClassNames,
        branchExpandedIcon: props.branchExpandedIcon,
        branchIcon: props.branchIcon,
        checkbox: props.checkbox,
        classNames: props.classNames,
        fileIcons: props.fileIcons,
        itemClassNames: props.itemClassNames,
        itemIcon: props.itemIcon,
      };
      const label = slotOrProp(slots.label, props.label);
      const rootNode = props.collection.rootNode as TreeNodeType;

      return h(
        TreeViewRoot as ArkPart,
        { ...attrs, collection: props.collection },
        () => [
          label
            ? h(TreeViewLabel, { class: props.classNames?.label }, label)
            : null,
          h(TreeViewTree, { class: props.classNames?.tree }, () =>
            (rootNode.children ?? []).map((node, index) =>
              renderNode(node, [index], options),
            ),
          ),
        ],
      );
    };
  },
});
// #endregion

export const TreeView = Object.assign(TreeViewShorthand, {
  Branch: TreeViewBranch,
  BranchContent: TreeViewBranchContent,
  BranchControl: TreeViewBranchControl,
  BranchIndentGuide: TreeViewBranchIndentGuide,
  BranchIndicator: TreeViewBranchIndicator,
  BranchText: TreeViewBranchText,
  BranchTrigger: TreeViewBranchTrigger,
  Context: TreeViewPrimitive.Context,
  Item: TreeViewItem,
  ItemText: TreeViewItemText,
  Label: TreeViewLabel,
  NodeCheckbox: TreeViewNodeCheckbox,
  NodeCheckboxIndicator: TreeViewNodeCheckboxIndicator,
  NodeContext: TreeViewPrimitive.NodeContext,
  NodeProvider: TreeViewNodeProvider,
  NodeRenameInput: TreeViewNodeRenameInput,
  Root: TreeViewRoot,
  Tree: TreeViewTree,
});
