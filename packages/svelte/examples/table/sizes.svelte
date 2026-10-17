<script lang="ts">
  import { Table } from "@pisagor/svelte";
  import { workspaceUsers } from "./helpers";

  const sizes = ["sm", "md", "lg"] as const;
  const users = workspaceUsers.slice(0, 2);
</script>

<div class="flex flex-col gap-4">
  {#each sizes as size (size)}
    <Table {size}>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each users as user (user.id)}
          <Table.Row>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table>
  {/each}
</div>
