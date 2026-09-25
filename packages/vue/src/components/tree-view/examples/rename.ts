import type { VNode } from "vue";
import { defineComponent, h, shallowRef } from "vue";
import type { ArkPart } from "../../../internal/types";
import type { TreeNodeType } from "..";
import { createTreeCollection, TreeView } from "..";
import { sampleFileTree } from "./data";

export default defineComponent({
  name: "Rename",
  setup() {
    const collection = shallowRef(
      createTreeCollection({ rootNode: sampleFileTree }),
    );

    const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
      h(
        TreeView.NodeProvider as ArkPart,
        { indexPath, key: node.id, node },
        () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(TreeView.BranchControl as ArkPart, null, () => node.name),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) =>
                    renderNode(child, [...indexPath, index]),
                  ),
                ),
              ])
            : h(TreeView.Item as ArkPart, null, () =>
                h(TreeView.ItemText as ArkPart, null, () => node.name),
              ),
      );

    const handleRenameComplete = (details: {
      indexPath: number[];
      label: string;
    }) => {
      const node = collection.value.at(details.indexPath);
      if (!node) {
        return;
      }
      collection.value = collection.value.replace(details.indexPath, {
        ...node,
        name: details.label,
      });
    };

    return () =>
      h("div", null, [
        h(
          TreeView as ArkPart,
          {
            canRename: () => true,
            collection: collection.value,
            onRenameComplete: handleRenameComplete,
          },
          () =>
            h(TreeView.Tree as ArkPart, null, () =>
              collection.value.rootNode.children?.map((node, index) =>
                renderNode(node, [index]),
              ),
            ),
        ),
      ]);
  },
});
