import {
  PhCaretRight,
  PhFile,
  PhFilePlus,
  PhFolder,
  PhFolderPlus,
  PhPencilSimple,
  PhTrash,
} from "@phosphor-icons/vue";
import type { TreeNodeType } from "@pisagor/vue";
import { ContextMenu, createTreeCollection, TreeView } from "@pisagor/vue";
import type { VNode } from "vue";
import { defineComponent, h, Teleport } from "vue";
import { sampleFileTree } from "./data";

type ArkPart = Parameters<typeof h>[0];

const menuContent = (items: () => VNode[]) =>
  h(Teleport, { to: "body" }, [
    h(ContextMenu.Positioner as ArkPart, null, () =>
      h(ContextMenu.Content as ArkPart, { class: "w-40" }, items),
    ),
  ]);

export default defineComponent({
  name: "WithContextMenu",
  setup() {
    const collection = createTreeCollection({ rootNode: sampleFileTree });

    const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
      h(
        TreeView.NodeProvider as ArkPart,
        { indexPath, key: node.id, node },
        () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(ContextMenu.Root as ArkPart, null, () => [
                  h(
                    ContextMenu.ContextTrigger as ArkPart,
                    { asChild: true },
                    () =>
                      h(TreeView.BranchControl as ArkPart, null, () => [
                        h(TreeView.BranchIndicator as ArkPart, null, () =>
                          h(PhCaretRight),
                        ),
                        h(TreeView.BranchText as ArkPart, null, () => [
                          h(PhFolder),
                          node.name,
                        ]),
                      ]),
                  ),
                  menuContent(() => [
                    h(
                      ContextMenu.Item as ArkPart,
                      { value: "add-folder" },
                      () => [
                        h(PhFolderPlus, { "aria-hidden": true }),
                        "Add folder",
                      ],
                    ),
                    h(
                      ContextMenu.Item as ArkPart,
                      { value: "add-file" },
                      () => [
                        h(PhFilePlus, { "aria-hidden": true }),
                        "Add file",
                      ],
                    ),
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
                h(TreeView.BranchContent as ArkPart, null, () => [
                  h(TreeView.BranchIndentGuide as ArkPart),
                  ...(node.children ?? []).map((child, index) =>
                    renderNode(child, [...indexPath, index]),
                  ),
                ]),
              ])
            : h(ContextMenu.Root as ArkPart, null, () => [
                h(
                  ContextMenu.ContextTrigger as ArkPart,
                  { asChild: true },
                  () =>
                    h(TreeView.Item as ArkPart, null, () => [
                      h(PhFile),
                      h(TreeView.ItemText as ArkPart, null, () => node.name),
                    ]),
                ),
                menuContent(() => [
                  h(ContextMenu.Item as ArkPart, { value: "add-file" }, () => [
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
      );

    return () =>
      h("div", null, [
        h(TreeView.Root as ArkPart, { collection }, () =>
          h(TreeView.Tree as ArkPart, null, () =>
            collection.rootNode.children?.map((node, index) =>
              renderNode(node, [index]),
            ),
          ),
        ),
      ]);
  },
});
