<script lang="ts">
import { Table } from "@pisagor/svelte/table";
import { workspaceUsers } from "./helpers";
</script>

<Table isHoverable={false}>
      <Table.Caption class="sr-only">
        Table with row hover disabled (isHoverable=false).
      </Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each workspaceUsers.slice(0, 3) as user}
<Table.Row>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
{/each}
      </Table.Body>
    </Table>
