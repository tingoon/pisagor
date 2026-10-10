<script lang="ts">
import { tableRecipe } from "@pisagor/recipes";

import { Badge, Table } from "@pisagor/svelte";
import { tv } from "tailwind-variants";
import { workspaceUsers } from "./helpers";

const brandTableRecipe = tv({
  extend: tableRecipe,
  slots: {
    head: "text-emerald-900 dark:text-emerald-100",
    header: "bg-emerald-500/5",
    row: "hover:bg-emerald-500/5",
  },
  variants: {},
});

const statusVariants: Record<string, "success" | "destructive" | "info"> = {
  active: "success",
  inactive: "destructive",
  invited: "info",
};
</script>

<Table recipe={brandTableRecipe}>
  <Table.Caption>A list of users in your workspace.</Table.Caption>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Email</Table.Head>
      <Table.Head>Role</Table.Head>
      <Table.Head class="text-center">Status</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each workspaceUsers as user (user.id)}
      <Table.Row>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.role}</Table.Cell>
        <Table.Cell class="text-center">
          <Badge class="capitalize" variant={statusVariants[user.status]}>
            {user.status}
          </Badge>
        </Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table>
