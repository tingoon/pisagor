import { PhArrowSquareOut, PhLink } from "@phosphor-icons/vue";
import type { VNode } from "vue";
import { defineComponent, h } from "vue";
import type { ArkPart } from "../../../internal/types";
import { createTreeCollection, TreeView } from "..";
import type { TreeNodeWithLink } from "./data";
import { docsLinkTree } from "./data";

export default defineComponent({
  name: "Links",
  setup() {
    const collection = createTreeCollection({ rootNode: docsLinkTree });

    const renderNode = (node: TreeNodeWithLink, indexPath: number[]): VNode =>
      h(
        TreeView.NodeProvider as ArkPart,
        { indexPath, key: node.id, node },
        () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(
                  TreeView.BranchControl as ArkPart,
                  { icon: null },
                  () => node.name,
                ),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) =>
                    renderNode(child, [...indexPath, index]),
                  ),
                ),
              ])
            : h(TreeView.Item as ArkPart, { asChild: true }, () =>
                h(
                  "a",
                  {
                    href: node.href ?? "#",
                    rel: node.href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined,
                    target: node.href?.startsWith("http")
                      ? "_blank"
                      : undefined,
                  },
                  h(TreeView.ItemText as ArkPart, { icon: PhLink }, () => [
                    node.name,
                    node.href?.startsWith("http") ? h(PhArrowSquareOut) : null,
                  ]),
                ),
              ),
      );

    return () =>
      h("div", null, [
        h(TreeView as ArkPart, { collection }, () => [
          h(TreeView.Label as ArkPart, null, () => "Docs"),
          h(TreeView.Tree as ArkPart, null, () =>
            collection.rootNode.children?.map((node, index) =>
              renderNode(node, [index]),
            ),
          ),
        ]),
      ]);
  },
});
