import { Table } from "..";
import { workspaceUsers } from "./helpers";

export function NotHoverable() {
  return (
    <Table isHoverable={false}>
      <Table.Caption className="sr-only">
        Table with row hover disabled (isHoverable=false).
      </Table.Caption>
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
  );
}
