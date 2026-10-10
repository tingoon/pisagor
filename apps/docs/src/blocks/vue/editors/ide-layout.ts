import { PhX } from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import type { NodeProviderProps, TreeNodeType } from "@pisagor/vue";
import { Button, createTreeCollection, Tabs, TreeView } from "@pisagor/vue";
import { defineComponent, h, type PropType, ref } from "vue";
import { ideLayoutBlock } from "#/recipes/blocks/editors";

const styles = ideLayoutBlock();

type ArkPart = Parameters<typeof h>[0];
type TreeViewSelectionDetails = {
  selectedNodes?: unknown;
  selectedValue?: unknown;
};

const treeViewParts = TreeView as unknown as {
  Tree: ArkPart;
  Branch: ArkPart;
  BranchItem: ArkPart;
  BranchContent: ArkPart;
  Content: ArkPart;
  Item: ArkPart;
  Node: ArkPart;
};

export interface IdeLayoutProps {
  class?: unknown;
}

export const IdeLayout = defineComponent({
  inheritAttrs: false,
  name: "IdeLayout",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props) {
    const activeItem = ref<string>("");

    const handleSelectNode = (details: TreeViewSelectionDetails) => {
      const selectedNodes =
        details?.selectedNodes ?? details?.selectedValue ?? [];
      const items: unknown[] = Array.isArray(selectedNodes)
        ? selectedNodes
        : [selectedNodes];

      const first = items[0];
      if (!first) return;

      const getChildrenLength = (node: unknown): number => {
        if (typeof node !== "object" || node === null) return 0;
        const children = (node as { children?: unknown }).children;
        return Array.isArray(children) ? children.length : 0;
      };

      const getNodeName = (node: unknown): string | undefined => {
        if (typeof node !== "object" || node === null) return undefined;
        const name = (node as { name?: unknown }).name;
        return typeof name === "string" ? name : undefined;
      };

      // React recipe skips folders (branches).
      const allAreFolders = items.every((node) => getChildrenLength(node) > 0);
      if (allAreFolders) return;

      const selectedItemName =
        typeof first === "string"
          ? first
          : (items
              .map(getNodeName)
              .filter((name): name is string => typeof name === "string")[0] ??
            "");

      const formattedName = selectedItemName.split("/").at(-1);
      activeItem.value = formattedName ?? "";
    };

    return () => {
      return h("div", { class: cn(styles.root(), props.class) }, () => [
        h("div", { class: styles.sidebar() }, () =>
          h(
            TreeView as ArkPart,
            {
              collection,
              onSelectionChange: (details: TreeViewSelectionDetails) =>
                handleSelectNode(details),
            },
            () =>
              h(treeViewParts.Tree, null, () =>
                collection.rootNode.children?.map(
                  (node: TreeNodeType, index: number) =>
                    h(TreeNode as unknown as ArkPart, {
                      indexPath: [index],
                      key: node.id,
                      node,
                    }),
                ),
              ),
          ),
        ),
        h("div", { class: styles.pane() }, () =>
          activeItem.value
            ? h(
                Tabs as ArkPart,
                {
                  class: styles.tabs(),
                  tabs: [
                    {
                      content: h(
                        "div",
                        { class: styles.content() },
                        () => "// File content",
                      ),
                      disabled: false,
                      label: h("div", { class: styles.tabLabel() }, () => [
                        h("span", null, () => activeItem.value),
                        h(
                          Button as ArkPart,
                          {
                            onClick: (event: MouseEvent) => {
                              event.stopPropagation();
                              activeItem.value = "";
                            },
                            size: "icon-xs",
                            type: "button",
                            variant: "ghost",
                          },
                          () => h(PhX, { "aria-hidden": true }),
                        ),
                      ]),
                      value: activeItem.value,
                    },
                  ],
                },
                () => undefined,
              )
            : null,
        ),
      ]);
    };
  },
});

function TreeNode({
  node,
  indexPath,
}: { node: TreeNodeType; indexPath: number[] } & Partial<NodeProviderProps>) {
  return h(treeViewParts.Node, { indexPath, value: node }, () =>
    node.children
      ? h(treeViewParts.Branch, null, () => [
          h(treeViewParts.BranchItem, null, () => node.name),
          h(treeViewParts.BranchContent, null, () =>
            node.children?.map((child: TreeNodeType, index: number) =>
              h(TreeNode as unknown as ArkPart, {
                indexPath: [...indexPath, index],
                key: child.id,
                node: child,
              }),
            ),
          ),
        ])
      : h(treeViewParts.Content, null, () =>
          h(treeViewParts.Item, null, () => node.name),
        ),
  );
}

const collection = createTreeCollection({
  rootNode: {
    children: [
      {
        children: [
          { id: "app/page.tsx", name: "page.tsx" },
          { id: "app/layout.tsx", name: "layout.tsx" },
        ],
        id: "app",
        name: "app",
      },
      {
        children: [
          { id: "components/button.tsx", name: "button.tsx" },
          { id: "components/input.tsx", name: "input.tsx" },
        ],
        id: "components",
        name: "components",
      },
      { id: "package.json", name: "package.json" },
      { id: "readme.md", name: "README.md" },
    ],
    id: "ROOT",
    name: "",
  },
});
