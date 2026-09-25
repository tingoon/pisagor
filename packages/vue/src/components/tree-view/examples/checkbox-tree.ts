import type { VNode } from "vue";
import { defineComponent, h, ref } from "vue";
import type { ArkPart } from "../../../internal/types";
import type { TreeNodeType } from "..";
import { createTreeCollection, TreeView } from "..";
import { sampleFileTree } from "./data";

export default defineComponent({
  name: "CheckboxTree",
  setup() {
    const collection = createTreeCollection({ rootNode: sampleFileTree });
    const checkedNodes = ref<string[]>(["readme.md"]);

    const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
      h(
        TreeView.NodeProvider as ArkPart,
        { indexPath, key: node.id, node },
        () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(TreeView.BranchControl as ArkPart, null, () => [
                  h(TreeView.NodeCheckbox as ArkPart),
                  node.name,
                ]),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) =>
                    renderNode(child, [...indexPath, index]),
                  ),
                ),
              ])
            : h(TreeView.Item as ArkPart, null, () => [
                h(TreeView.NodeCheckbox as ArkPart),
                h(TreeView.ItemText as ArkPart, null, () => node.name),
              ]),
      );

    return () =>
      h("div", { class: "flex items-center gap-2" }, [
        h("div", null, [
          h(
            TreeView as ArkPart,
            {
              checkedValue: checkedNodes.value,
              collection,
              onCheckedChange: (details: { checkedValue: string[] }) => {
                checkedNodes.value = details.checkedValue;
              },
            },
            () =>
              h(TreeView.Tree as ArkPart, null, () =>
                collection.rootNode.children?.map((node, index) =>
                  renderNode(node, [index]),
                ),
              ),
          ),
        ]),
        h(
          "p",
          { class: "whitespace-pre-wrap text-muted-foreground text-sm" },
          JSON.stringify(checkedNodes.value, null, 2),
        ),
      ]);
  },
});
