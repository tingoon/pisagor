import { PhPackage } from "@phosphor-icons/vue";
import type { VNode } from "vue";
import { defineComponent, h } from "vue";
import type { ArkPart } from "../../../internal/types";
import type { TreeNodeType } from "..";
import { createTreeCollection, TreeView } from "..";

export default defineComponent({
  name: "CustomIconsFolder",
  setup() {
    const collection = createTreeCollection({
      rootNode: {
        children: [
          {
            children: [
              { id: "app/page.tsx", name: "page.tsx" },
              { id: "app/layout.tsx", name: "layout.tsx" },
            ],
            expandedIcon: PhPackage,
            icon: PhPackage,
            id: "app",
            name: "app",
          },
          {
            children: [
              { id: "components/button.tsx", name: "button.tsx" },
              { id: "components/input.tsx", name: "input.tsx" },
            ],
            expandedIcon: null,
            icon: null,
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

    const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
      h(TreeView.NodeProvider as ArkPart, { indexPath, key: node.id, node }, () =>
        node.children
          ? h(TreeView.Branch as ArkPart, null, () => [
              h(
                TreeView.BranchControl as ArkPart,
                { expandedIcon: node.expandedIcon, icon: node.icon },
                () => node.name,
              ),
              h(TreeView.BranchContent as ArkPart, null, () =>
                node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
              ),
            ])
          : h(TreeView.Item as ArkPart, null, () =>
              h(TreeView.ItemText as ArkPart, null, () => node.name),
            ),
      );

    return () =>
      h("div", null, [
        h(TreeView as ArkPart, { collection }, () =>
          h(TreeView.Tree as ArkPart, null, () =>
            collection.rootNode.children?.map((node, index) => renderNode(node, [index])),
          ),
        ),
      ]);
  },
});
