<script lang="ts">
import { Table } from "@pisagor/svelte/table";
import { workspaceUsers } from "./helpers";
</script>

<div class="flex flex-col gap-2">
      <Table variant="plain">
        <Table.Caption class="sr-only">
          Default table variant.
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
      <Table variant="striped">
        <Table.Caption class="sr-only">
          Striped table variant.
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
    </div>
