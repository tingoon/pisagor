import type { VNode } from "vue";
import { defineComponent, h, ref } from "vue";
import type { ArkPart } from "../../../internal/types";
import type { TreeNodeType } from "..";
import { createTreeCollection, TreeView } from "..";
import { controlledFileTree } from "./data";

export default defineComponent({
  name: "Controlled",
  setup() {
    const collection = createTreeCollection({ rootNode: controlledFileTree });
    const selected = ref<string[]>([]);

    const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
      h(TreeView.NodeProvider as ArkPart, { indexPath, key: node.id, node }, () =>
        node.children
          ? h(TreeView.Branch as ArkPart, null, () => [
              h(TreeView.BranchControl as ArkPart, null, () => node.name),
              h(TreeView.BranchContent as ArkPart, null, () =>
                node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
              ),
            ])
          : h(TreeView.Item as ArkPart, null, () =>
              h(TreeView.ItemText as ArkPart, null, () => node.name),
            ),
      );

    return () => {
      const isCorrectSelection = selected.value[0] === "components/input.tsx";

      return h("div", { class: "flex flex-col items-center gap-2" }, [
        h("p", { class: "text-muted-foreground text-sm" }, "Select input.tsx"),
        h(
          TreeView as ArkPart,
          {
            class: "overflow-hidden",
            collection,
            onSelectionChange: (details: { selectedValue: string[] }) => {
              selected.value = details.selectedValue;
            },
            selectedValue: selected.value,
          },
          () =>
            h(TreeView.Tree as ArkPart, null, () =>
              collection.rootNode.children?.map((node, index) => renderNode(node, [index])),
            ),
        ),
        h("p", { class: "text-muted-foreground text-sm" }, isCorrectSelection ? "✅" : "❌"),
      ]);
    };
  },
});
