<script lang="ts">
  import { Button, DropdownMenu, Table } from "@pisagor/svelte";
  import {
    DotsThreeVerticalIcon,
    EyeIcon,
    PencilSimpleIcon,
    TrashIcon,
  } from "phosphor-svelte";
  import { workspaceUsers } from "./helpers";
</script>

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
    {#each workspaceUsers.slice(0, 3) as user}
      <Table.Row>
        <Table.Cell class="font-medium">{user.name}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell class="text-right">
          <DropdownMenu
            classNames={{ content: "min-w-40" }}
            positioning={{ placement: "left-end" }}
          >
            {#snippet trigger(props)}
              <Button
                {...props()}
                aria-label="More options"
                size="icon-sm"
                variant="outline"
              >
                <DotsThreeVerticalIcon />
              </Button>
            {/snippet}

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
          </DropdownMenu>
        </Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table>
