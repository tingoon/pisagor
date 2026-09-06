import { ark } from "@ark-ui/vue/factory";
import {
  createTreeCollection as arkCreateTreeCollection,
  type TreeCollection as arkTreeCollection,
  TreeView as TreeViewPrimitive,
} from "@ark-ui/vue/tree-view";
import {
  PhCaretRight,
  PhCheck,
  PhFile,
  PhFolder,
  PhFolderOpen,
  PhMinus,
} from "@phosphor-icons/vue";
import { formControlToggleRecipe } from "@pisagor/recipes/form-control";
import {
  treeViewBranchRecipe,
  treeViewItemRecipe,
  treeViewRecipe,
} from "@pisagor/recipes/tree-view";
import { cn } from "@pisagor/utils";
import { defineComponent, Fragment, h, type PropType } from "vue";
import { createContext } from "../../internal/utils/create-context";

// #region Types
export interface TreeNodeType<T = unknown> {
  children?: TreeNodeType<T>[] | undefined;
  expandedIcon?: unknown | null;
  icon?: unknown | null;
  id: string;
  name: string;
}

export type TreeCollection = arkTreeCollection;

interface TreeViewContextValue {
  fileIcons?: Record<string, unknown | null>;
}

export interface TreeViewProps {
  fileIcons?: Record<string, unknown | null>;
  lazyMount?: boolean;
  unmountOnExit?: boolean;
  /**
   * Style recipe. Defaults to `treeViewRecipe` from `@pisagor/recipes/tree-view`.
   *
   * @defaultValue treeViewRecipe
   */
  recipe?: typeof treeViewRecipe;
  class?: unknown;
}

export interface NodeProviderProps<T extends TreeNodeType = TreeNodeType> {
  value: T;
}

export interface TreeViewBranchProps {
  /**
   * Style recipe. Defaults to `treeViewBranchRecipe` from `@pisagor/recipes/tree-view`.
   *
   * @defaultValue treeViewBranchRecipe
   */
  branchRecipe?: typeof treeViewBranchRecipe;
  class?: unknown;
}

export interface TreeViewItemProps {
  /**
   * Style recipe. Defaults to `treeViewItemRecipe` from `@pisagor/recipes/tree-view`.
   *
   * @defaultValue treeViewItemRecipe
   */
  itemRecipe?: typeof treeViewItemRecipe;
  class?: unknown;
}

export interface TreeViewItemTitleProps {
  /**
   * Style recipe. Defaults to `treeViewItemRecipe` from `@pisagor/recipes/tree-view`.
   *
   * @defaultValue treeViewItemRecipe
   */
  itemRecipe?: typeof treeViewItemRecipe;
  class?: unknown;
}
// #endregion

// #region Context
const [provideTreeViewContext, useTreeViewContext] = createContext<TreeViewContextValue>({
  defaultValue: {},
  name: "TreeViewLocal",
  strict: false,
});
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

export const createFileIcons = (args: Record<`.${string}`, unknown | null>) => ({ ...args });

const getFileExtension = (file: string) => {
  const name = file.includes(".") ? file.split(".").at(-1)?.toLowerCase() : null;
  return name ? `.${name}` : null;
};
// #endregion

// #region Parts
type ArkPart = Parameters<typeof h>[0];

export const TreeViewRoot = defineComponent({
  inheritAttrs: false,
  name: "TreeViewRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    fileIcons: { default: undefined, type: Object as PropType<Record<string, unknown | null>> },
    lazyMount: { default: true, type: Boolean },
    recipe: {
      default: treeViewRecipe,
      type: Function as PropType<typeof treeViewRecipe>,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    provideTreeViewContext({ fileIcons: props.fileIcons });

    return () => {
      const variantSlots = props.recipe();

      return h(
        TreeViewPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        slots.default?.(),
      );
    };
  },
});

export const TreeViewLabel = defineComponent({
  inheritAttrs: false,
  name: "TreeViewLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: treeViewRecipe,
      type: Function as PropType<typeof treeViewRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        TreeViewPrimitive.Label as ArkPart,
        {
          ...attrs,
          class: variantSlots.label({ class: props.class }),
        },
        slots.default?.(),
      );
    };
  },
});

export const TreeViewTree = defineComponent({
  inheritAttrs: false,
  name: "TreeViewTree",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: treeViewRecipe,
      type: Function as PropType<typeof treeViewRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        TreeViewPrimitive.Tree as ArkPart,
        {
          ...attrs,
          class: variantSlots.tree({ class: props.class }),
        },
        slots.default?.(),
      );
    };
  },
});

export const TreeViewNodeProvider = defineComponent({
  inheritAttrs: false,
  name: "TreeViewNodeProvider",
  setup(_, { attrs, slots }) {
    return () =>
      h(TreeViewPrimitive.NodeProvider as unknown as ArkPart, { ...attrs }, slots.default?.());
  },
});

export const TreeViewBranch = defineComponent({
  inheritAttrs: false,
  name: "TreeViewBranch",
  props: {
    branchRecipe: {
      default: treeViewBranchRecipe,
      type: Function as PropType<typeof treeViewBranchRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.branchRecipe();

      return h(
        TreeViewPrimitive.Branch as ArkPart,
        { ...attrs, class: variantSlots.base({ class: attrs.class as string | undefined }) },
        slots.default?.(),
      );
    };
  },
});

export const TreeViewBranchIndicator = defineComponent({
  inheritAttrs: false,
  name: "TreeViewBranchIndicator",
  props: {
    branchRecipe: {
      default: treeViewBranchRecipe,
      type: Function as PropType<typeof treeViewBranchRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.branchRecipe();

      return h(
        TreeViewPrimitive.BranchIndicator as ArkPart,
        {
          ...attrs,
          class: variantSlots.indicator(),
        },
        () => slots.default?.() ?? h(PhCaretRight),
      );
    };
  },
});

export const TreeViewBranchContent = defineComponent({
  inheritAttrs: false,
  name: "TreeViewBranchContent",
  props: {
    branchRecipe: {
      default: treeViewBranchRecipe,
      type: Function as PropType<typeof treeViewBranchRecipe>,
    },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const variantSlots = props.branchRecipe();

      return h(
        TreeViewPrimitive.BranchContent as ArkPart,
        {
          ...attrs,
          class: variantSlots.content({ class: props.class }),
        },
        () => [
          h(TreeViewBranchIndentGuide, { branchRecipe: props.branchRecipe }),
          children.default?.(),
        ],
      );
    };
  },
});

const TreeViewBranchIndentGuide = defineComponent({
  inheritAttrs: false,
  name: "TreeViewBranchIndentGuide",
  props: {
    branchRecipe: {
      default: treeViewBranchRecipe,
      type: Function as PropType<typeof treeViewBranchRecipe>,
    },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const variantSlots = props.branchRecipe();

      return h(
        TreeViewPrimitive.BranchIndentGuide as ArkPart,
        {
          ...attrs,
          class: variantSlots.indentGuide(),
        },
        children.default?.(),
      );
    };
  },
});

export const TreeViewBranchControl = defineComponent({
  inheritAttrs: false,
  name: "TreeViewBranchControl",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    expandedIcon: { default: undefined, type: Object as PropType<ArkPart | null> },
    icon: { default: undefined, type: Object as PropType<ArkPart | null> },
    recipe: {
      default: treeViewRecipe,
      type: Function as PropType<typeof treeViewRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        TreeViewPrimitive.BranchControl as ArkPart,
        {
          ...attrs,
          class: variantSlots.control({ class: props.class }),
        },
        () => [
          h(TreeViewBranchIndicator),
          h(TreeViewBranchTitle, { expandedIcon: props.expandedIcon, icon: props.icon }, () =>
            slots.default?.(),
          ),
        ],
      );
    };
  },
});

const TreeViewBranchTitle = defineComponent({
  inheritAttrs: false,
  name: "TreeViewBranchTitle",
  props: {
    branchRecipe: {
      default: treeViewBranchRecipe,
      type: Function as PropType<typeof treeViewBranchRecipe>,
    },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    expandedIcon: { default: undefined, type: Object as PropType<ArkPart | null> },
    icon: { default: undefined, type: Object as PropType<ArkPart | null> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(TreeViewPrimitive.NodeContext as ArkPart, null, {
        default: (nodeState: unknown) => {
          const { renaming, expanded } = nodeState as {
            renaming?: boolean;
            expanded?: boolean;
          };

          if (renaming) {
            return h(TreeViewNodeInput);
          }

          const IconComponent = props.icon ?? null;
          const ExpandedIconComponent = props.expandedIcon ?? null;

          const showCollapsedIcon = IconComponent !== null && !expanded;
          const showExpandedIcon = ExpandedIconComponent !== null && expanded;
          const variantSlots = props.branchRecipe();

          return h(
            TreeViewPrimitive.BranchText as ArkPart,
            {
              ...attrs,
              class: variantSlots.title({ class: props.class }),
            },
            () => [
              showCollapsedIcon
                ? h(TreeViewItemIcon, null, () => (IconComponent ? h(IconComponent) : h(PhFolder)))
                : null,
              showExpandedIcon
                ? h(TreeViewItemIcon, null, () =>
                    ExpandedIconComponent ? h(ExpandedIconComponent) : h(PhFolderOpen),
                  )
                : null,
              slots.default?.(),
            ],
          );
        },
      });
  },
});

export const TreeViewItem = defineComponent({
  inheritAttrs: false,
  name: "TreeViewItem",
  props: {
    recipe: {
      default: treeViewRecipe,
      type: Function as PropType<typeof treeViewRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.recipe();

      return h(
        TreeViewPrimitive.Item as ArkPart,
        { ...attrs, class: variantSlots.control({ class: attrs.class as string | undefined }) },
        slots.default?.(),
      );
    };
  },
});

export const TreeViewItemTitle = defineComponent({
  inheritAttrs: false,
  name: "TreeViewItemTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: treeViewItemRecipe,
      type: Function as PropType<typeof treeViewItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        TreeViewPrimitive.ItemText as ArkPart,
        {
          ...attrs,
          class: variantSlots.title({ class: props.class }),
        },
        slots.default?.(),
      );
    };
  },
});

const TreeViewItemIcon = defineComponent({
  inheritAttrs: false,
  name: "TreeViewItemIcon",
  props: {
    itemRecipe: {
      default: treeViewItemRecipe,
      type: Function as PropType<typeof treeViewItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: variantSlots.icon({ class: attrs.class as string | undefined }),
          "data-part": "item-icon",
          "data-scope": "tree-view",
        },
        slots.default?.(),
      );
    };
  },
});

export const TreeViewNodeInput = defineComponent({
  inheritAttrs: false,
  name: "TreeViewNodeInput",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: treeViewItemRecipe,
      type: Function as PropType<typeof treeViewItemRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        TreeViewPrimitive.NodeRenameInput as ArkPart,
        {
          ...attrs,
          class: variantSlots.renameInput({ class: props.class }),
        },
        undefined,
      );
    };
  },
});

export const TreeViewItemText = defineComponent({
  inheritAttrs: false,
  name: "TreeViewItemText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    icon: { default: PhFile, type: Object as PropType<ArkPart> },
    itemRecipe: {
      default: treeViewItemRecipe,
      type: Function as PropType<typeof treeViewItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    const treeViewContext = useTreeViewContext();

    const getFileIcon = (value: string): ArkPart => {
      const extension = getFileExtension(value);
      const resolved = extension ? treeViewContext?.fileIcons?.[extension] : undefined;
      return (resolved ?? props.icon) as ArkPart;
    };

    return () =>
      h(TreeViewPrimitive.NodeContext as ArkPart, null, {
        default: (nodeState: unknown) => {
          const { renaming, value } = nodeState as { renaming?: boolean; value: string };
          const ResolvedIcon = getFileIcon(value);

          return h(Fragment, null, [
            h(TreeViewItemIcon, { itemRecipe: props.itemRecipe }, () => h(ResolvedIcon)),
            renaming
              ? h(TreeViewNodeInput)
              : h(TreeViewItemTitle, { ...attrs, class: props.class }, () => slots.default?.()),
          ]);
        },
      });
  },
});

export const TreeViewNodeCheckbox = defineComponent({
  inheritAttrs: false,
  name: "TreeViewNodeCheckbox",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: treeViewItemRecipe,
      type: Function as PropType<typeof treeViewItemRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const variantSlots = props.itemRecipe();

      return h(
        TreeViewPrimitive.NodeCheckbox as ArkPart,
        {
          ...attrs,
          class: cn(formControlToggleRecipe(), variantSlots.checkbox(), props.class, attrs.class),
        },
        () =>
          h(
            TreeViewPrimitive.NodeCheckboxIndicator as ArkPart,
            {
              indeterminate: h(PhMinus),
            },
            () => h(PhCheck),
          ),
      );
    };
  },
});
// #endregion
