/** @jsxImportSource solid-js */

import { Pagination, Select, Table } from "@pisagor/solid";
import { cn } from "@pisagor/utils";
import { createMemo, createSignal, For } from "solid-js";
import { tablePaginationBlock } from "#/recipes/blocks/table";

const styles = tablePaginationBlock();

export interface TablePaginationProps {
  class?: string;
}

export function TablePagination(props: TablePaginationProps) {
  const [page, setPage] = createSignal(1);
  const [pageSize, setPageSize] = createSignal(2);

  const paginatedUsers = createMemo(() =>
    users.slice((page() - 1) * pageSize(), page() * pageSize()),
  );

  return (
    <div class={cn(styles.root(), props.class)}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <For each={paginatedUsers()}>
            {(user) => (
              <Table.Row>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
              </Table.Row>
            )}
          </For>
        </Table.Body>
      </Table>
      <div class={styles.toolbar()}>
        <div class={styles.pageSize()}>
          <div class={styles.pageSizeLabel()}>Items per page:</div>
          <Select
            items={["2", "3", "4"]}
            onValueChange={(value) =>
              setPageSize(Number(Array.isArray(value) ? value[0] : value))
            }
            value={[String(pageSize())]}
          />
        </div>
        <Pagination
          class={styles.pagination()}
          count={users.length}
          onPageChange={({ page: next }) => setPage(next)}
          onPageSizeChange={({ pageSize: next }) => setPageSize(next)}
          page={page()}
          pageSize={pageSize()}
        >
          <Pagination.PrevTrigger />
          <Pagination.NextTrigger />
        </Pagination>
      </div>
    </div>
  );
}

const samplePeople = [
  "Jane Doe",
  "John Doe",
  "Alex Morgan",
  "Sam Taylor",
  "Riley Chen",
  "Jordan Lee",
  "Casey Brown",
  "Morgan Davis",
];

const users = Array.from({ length: 48 }, (_, i) => ({
  email: `user${i + 1}@example.com`,
  id: `user-${i + 1}`,
  name: samplePeople[i % samplePeople.length],
}));
