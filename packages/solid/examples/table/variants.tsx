/** @jsxImportSource solid-js */
import { Table } from "@pisagor/solid/table";
import { workspaceUsers } from "./helpers";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <Table variant="plain">
        <Table.Caption class="sr-only">Default table variant.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {workspaceUsers.slice(0, 3).map((user) => (
            <Table.Row>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Table variant="striped">
        <Table.Caption class="sr-only">Striped table variant.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {workspaceUsers.slice(0, 3).map((user) => (
            <Table.Row>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
