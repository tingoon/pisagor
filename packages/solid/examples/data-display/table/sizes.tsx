import { Table } from "@pisagor/solid";
import { For } from "solid-js";
import { workspaceUsers } from "./helpers";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-4">
      <For each={sizes}>
        {(size) => (
          <Table size={size}>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Email</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <For each={workspaceUsers.slice(0, 2)}>
                {(user) => (
                  <Table.Row>
                    <Table.Cell>{user.name}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                  </Table.Row>
                )}
              </For>
            </Table.Body>
          </Table>
        )}
      </For>
    </div>
  );
}
