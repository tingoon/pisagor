<script lang="ts">
import { ContextMenu, Table } from "@pisagor/svelte";
import EyeIcon from "phosphor-svelte/lib/EyeIcon";
import PencilSimpleIcon from "phosphor-svelte/lib/PencilSimpleIcon";
import TrashIcon from "phosphor-svelte/lib/TrashIcon";
import { tableRowMenuBlock } from "#/recipes/blocks/table";

const styles = tableRowMenuBlock();

interface Props {
  class?: string;
}
let { class: className }: Props = $props();

const workspaceUsers = [
  { email: "jane.doe@example.com", id: "1", name: "Jane Doe" },
  { email: "john.doe@example.com", id: "2", name: "John Doe" },
  { email: "alex.morgan@example.com", id: "3", name: "Alex Morgan" },
  { email: "sam.taylor@example.com", id: "4", name: "Sam Taylor" },
];
</script>

<Table class={className}>
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
    {#each workspaceUsers.slice(0, 3) as user}
      <ContextMenu>
        <ContextMenu.ContextTrigger>
          <Table.Row>
            <Table.Cell class={styles.name()}>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
        </ContextMenu.ContextTrigger>
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
    {/each}
  </Table.Body>
</Table>
