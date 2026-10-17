import { tableRecipe } from "@pisagor/recipes";
import type { BadgeVariant } from "@pisagor/solid";
import { Badge, Table } from "@pisagor/solid";
import { For } from "solid-js";
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

export function CustomRecipe() {
  const statusVariants: Record<string, BadgeVariant> = {
    active: "success",
    inactive: "destructive",
    invited: "info",
  };

  return (
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
        <For each={workspaceUsers}>
          {(user) => (
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
          )}
        </For>
      </Table.Body>
    </Table>
  );
}
