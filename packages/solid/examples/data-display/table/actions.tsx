import { Button, DropdownMenu, Table } from "@pisagor/solid";
import {
  DotsThreeVerticalIcon,
  EyeIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@pisagor/solid/icons";
import { workspaceUsers } from "./helpers";
export function Actions() {
  return (
    <Table>
      <Table.Caption class="sr-only">
        Users with row actions (edit, delete).
      </Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head class="text-right">Actions</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {workspaceUsers.slice(0, 3).map((user) => (
          <Table.Row>
            <Table.Cell class="font-medium">{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell class="text-right">
              <DropdownMenu positioning={{ placement: "left-end" }}>
                <DropdownMenu.Trigger
                  asChild={(props) => (
                    <Button
                      {...props()}
                      aria-label="More options"
                      size="icon-sm"
                      variant="outline"
                    >
                      <DotsThreeVerticalIcon />
                    </Button>
                  )}
                />
                <DropdownMenu.Content class="min-w-40">
                  <DropdownMenu.Item value="view">
                    <EyeIcon />
                    View
                    <DropdownMenu.Shortcut>⌘ V</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item value="edit">
                    <PencilSimpleIcon />
                    Edit
                    <DropdownMenu.Shortcut>⌘ E</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item value="delete" variant="destructive">
                    <TrashIcon />
                    Delete
                    <DropdownMenu.Shortcut>⌘ ⌫</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
