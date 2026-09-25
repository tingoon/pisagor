import type { BadgeVariant } from "@pisagor/react";
import { Badge } from "@pisagor/react";
import { Table } from "..";
import { workspaceUsers } from "./helpers";
export function Default() {
  const statusVariants: Record<string, BadgeVariant> = {
    active: "success",
    inactive: "destructive",
    invited: "info",
  };

  return (
    <Table>
      <Table.Caption>A list of users in your workspace.</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head>Role</Table.Head>
          <Table.Head className="text-center">Status</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {workspaceUsers.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.role}</Table.Cell>
            <Table.Cell className="text-center">
              <Badge
                className="capitalize"
                variant={statusVariants[user.status]}
              >
                {user.status}
              </Badge>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
