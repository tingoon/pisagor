<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { ContextMenu, Table } from "@pisagor/svelte";
  import { EyeIcon, PencilSimpleIcon, TrashIcon } from "phosphor-svelte";
  import { tableRowMenuBlock } from "#/styles/recipes/table";

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
      <ContextMenu.Root>
        <ContextMenu.ContextTrigger>
          <Table.Row>
            <Table.Cell class={styles.name()}>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
        </ContextMenu.ContextTrigger>
        <Portal>
          <ContextMenu.Positioner>
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
          </ContextMenu.Positioner>
        </Portal>
      </ContextMenu.Root>
    {/each}
  </Table.Body>
</Table>
