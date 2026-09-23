import { PhFilePlus, PhFolderPlus, PhPencilSimple, PhTrash } from "@phosphor-icons/vue";
import { ContextMenu } from "@pisagor/vue";
import type { VNode } from "vue";
import { defineComponent, h } from "vue";
import type { ArkPart } from "../../../internal/types";
import type { TreeNodeType } from "..";
import { createTreeCollection, TreeView } from "..";
import { sampleFileTree } from "./data";
export default defineComponent({
  name: "WithContextMenu",
  setup() {
    const collection = createTreeCollection({ rootNode: sampleFileTree });

    const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
      h(TreeView.NodeProvider as ArkPart, { indexPath, key: node.id, node }, () =>
        node.children
          ? h(TreeView.Branch as ArkPart, null, () => [
              h(ContextMenu as ArkPart, null, () => [
                h(ContextMenu.ContextTrigger as ArkPart, { asChild: true }, () =>
                  h(TreeView.BranchControl as ArkPart, null, () => node.name),
                ),
                h(ContextMenu.Content as ArkPart, { class: "w-40" }, () => [
                  h(ContextMenu.Item as ArkPart, { value: "add-folder" }, () => [
                    h(PhFolderPlus, { "aria-hidden": true }),
                    "Add folder",
                  ]),
                  h(ContextMenu.Item as ArkPart, { value: "add-file" }, () => [
                    h(PhFilePlus, { "aria-hidden": true }),
                    "Add file",
                  ]),
                  h(ContextMenu.Separator as ArkPart),
                  h(ContextMenu.Item as ArkPart, { value: "rename" }, () => [
                    h(PhPencilSimple, { "aria-hidden": true }),
                    "Rename",
                  ]),
                  h(ContextMenu.Separator as ArkPart),
                  h(
                    ContextMenu.Item as ArkPart,
                    { value: "delete", variant: "destructive" },
                    () => [h(PhTrash, { "aria-hidden": true }), "Delete"],
                  ),
                ]),
              ]),
              h(TreeView.BranchContent as ArkPart, null, () =>
                node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
              ),
            ])
          : h(ContextMenu as ArkPart, null, () => [
              h(ContextMenu.ContextTrigger as ArkPart, { asChild: true }, () =>
                h(TreeView.Item as ArkPart, null, () =>
                  h(TreeView.ItemText as ArkPart, null, () => node.name),
                ),
              ),
              h(ContextMenu.Content as ArkPart, { class: "w-40" }, () => [
                h(ContextMenu.Item as ArkPart, { value: "add-file" }, () => [
                  h(PhPencilSimple, { "aria-hidden": true }),
                  "Rename",
                ]),
                h(ContextMenu.Separator as ArkPart),
                h(ContextMenu.Item as ArkPart, { value: "delete", variant: "destructive" }, () => [
                  h(PhTrash, { "aria-hidden": true }),
                  "Delete",
                ]),
              ]),
            ]),
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
