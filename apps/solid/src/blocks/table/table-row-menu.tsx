/** @jsxImportSource solid-js */

import { tableRowMenuBlock } from "@pisagor/recipes/blocks/table";
import { ContextMenu, Table } from "@pisagor/solid";
import { EyeIcon, PencilSimpleIcon, TrashIcon } from "@pisagor/solid/icons";
import { For } from "solid-js";

const styles = tableRowMenuBlock();

export interface TableRowMenuProps {
  class?: string;
}

export function TableRowMenu(props: TableRowMenuProps) {
  return (
    <Table class={props.class}>
      <Table.Caption class={styles.srOnly()}>
        Users with row context menu. Right-click a row to open the menu.
      </Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <For each={workspaceUsers.slice(0, 3)}>
          {(user) => (
            <ContextMenu>
              <ContextMenu.ContextTrigger
                asChild={(triggerProps) => (
                  <Table.Row {...triggerProps()}>
                    <Table.Cell class={styles.name()}>{user.name}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                  </Table.Row>
                )}
              />
              <ContextMenu.Content class={styles.menu()}>
                <ContextMenu.Item value="view">
                  <EyeIcon />
                  View
                  <ContextMenu.Shortcut>⌘ V</ContextMenu.Shortcut>
                </ContextMenu.Item>
                <ContextMenu.Item value="edit">
                  <PencilSimpleIcon />
                  Edit
                  <ContextMenu.Shortcut>⌘ E</ContextMenu.Shortcut>
                </ContextMenu.Item>
                <ContextMenu.Item value="delete" variant="destructive">
                  <TrashIcon />
                  Delete
                  <ContextMenu.Shortcut>⌘ ⌫</ContextMenu.Shortcut>
                </ContextMenu.Item>
              </ContextMenu.Content>
            </ContextMenu>
          )}
        </For>
      </Table.Body>
    </Table>
  );
}

const workspaceUsers = [
  {
    email: "jane.doe@example.com",
    id: "1",
    name: "Jane Doe",
    role: "Admin",
    status: "active",
  },
  {
    email: "john.doe@example.com",
    id: "2",
    name: "John Doe",
    role: "Editor",
    status: "invited",
  },
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
