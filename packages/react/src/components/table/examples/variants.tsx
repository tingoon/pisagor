import { Table } from "..";
import { workspaceUsers } from "./helpers";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Table variant="plain">
        <Table.Caption className="sr-only">Default table variant.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {workspaceUsers.slice(0, 3).map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Table variant="striped">
        <Table.Caption className="sr-only">Striped table variant.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {workspaceUsers.slice(0, 3).map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
