import { EyeIcon, PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { ContextMenu } from "@pisagor/react/context-menu";
import { Table } from "@pisagor/react/table";

export interface TableRowMenuProps {
  className?: string;
}

export function TableRowMenu({ className }: TableRowMenuProps) {
  return (
    <Table className={className}>
      <Table.Caption className="sr-only">
        Users with row context menu. Right-click a row to open the menu.
      </Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {workspaceUsers.slice(0, 3).map((user) => (
          <ContextMenu key={user.id}>
            <ContextMenu.Trigger asChild>
              <Table.Row>
                <Table.Cell className="font-medium">{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
              </Table.Row>
            </ContextMenu.Trigger>
            <ContextMenu.Content className="min-w-40">
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
        ))}
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
