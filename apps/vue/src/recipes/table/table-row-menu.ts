import { PhEye, PhPencil, PhTrash } from "@phosphor-icons/vue";
import { ContextMenu } from "@pisagor/vue/context-menu";
import { Table } from "@pisagor/vue/table";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

export interface TableRowMenuProps {
  class?: unknown;
}

const workspaceUsers = [
  { email: "jane.doe@example.com", id: "1", name: "Jane Doe", role: "Admin", status: "active" },
  { email: "john.doe@example.com", id: "2", name: "John Doe", role: "Editor", status: "invited" },
  {
    email: "alex.morgan@example.com",
    id: "3",
    name: "Alex Morgan",
    role: "Viewer",
    status: "inactive",
  },
  {
    email: "sam.taylor@example.com",
    id: "4",
    name: "Sam Taylor",
    role: "Editor",
    status: "active",
  },
];

export const TableRowMenu = defineComponent({
  inheritAttrs: false,
  name: "TableRowMenu",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props) {
    return () =>
      h(Table as ArkPart, { class: props.class }, () => [
        h(
          Table.Caption as ArkPart,
          { class: "sr-only" },
          () => "Users with row context menu. Right-click a row to open the menu.",
        ),
        h(Table.Header as ArkPart, null, () =>
          h(Table.Row as ArkPart, null, () => [
            h(Table.Head as ArkPart, null, () => "Name"),
            h(Table.Head as ArkPart, null, () => "Email"),
          ]),
        ),
        h(Table.Body as ArkPart, null, () =>
          workspaceUsers
            .slice(0, 3)
            .map((user) =>
              h(ContextMenu as ArkPart, { key: user.id }, () => [
                h(ContextMenu.Trigger as ArkPart, { asChild: true }, () =>
                  h(Table.Row as ArkPart, null, () => [
                    h(Table.Cell as ArkPart, { class: "font-medium" }, () => user.name),
                    h(Table.Cell as ArkPart, null, () => user.email),
                  ]),
                ),
                h(ContextMenu.Content as ArkPart, { class: "min-w-40" }, () => [
                  h(ContextMenu.Item as ArkPart, { value: "view" }, () => [
                    h(PhEye, { "aria-hidden": true }),
                    "View",
                    h(ContextMenu.Shortcut as ArkPart, null, () => "⌘ V"),
                  ]),
                  h(ContextMenu.Item as ArkPart, { value: "edit" }, () => [
                    h(PhPencil, { "aria-hidden": true }),
                    "Edit",
                    h(ContextMenu.Shortcut as ArkPart, null, () => "⌘ E"),
                  ]),
                  h(
                    ContextMenu.Item as ArkPart,
                    { value: "delete", variant: "destructive" },
                    () => [
                      h(PhTrash, { "aria-hidden": true }),
                      "Delete",
                      h(ContextMenu.Shortcut as ArkPart, null, () => "⌘ ⌫"),
                    ],
                  ),
                ]),
              ]),
            ),
        ),
      ]);
  },
});
