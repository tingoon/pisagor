import { Pagination, Select, Table } from "@pisagor/react";
import { cn } from "@pisagor/utils";
import { useState } from "react";

export interface TablePaginationProps {
  className?: string;
}

export function TablePagination({ className }: TablePaginationProps) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  const paginatedUsers = users.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className={cn("flex flex-col gap-2 rounded-xl border p-4", className)}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {paginatedUsers.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex items-center justify-between gap-22">
        <div className="flex shrink-0 items-center gap-2">
          <div className="text-muted-foreground text-sm">Items per page:</div>
          <Select
            items={["2", "3", "4"]}
            onValueChange={(value) => setPageSize(Number(Array.isArray(value) ? value[0] : value))}
            value={[String(pageSize)]}
          />
        </div>
        <Pagination
          className="flex-1 justify-end"
          count={users.length}
          onPageChange={({ page }) => setPage(page)}
          onPageSizeChange={({ pageSize }) => setPageSize(pageSize)}
          page={page}
          pageSize={pageSize}
        >
          <Pagination.Previous />
          <Pagination.Next />
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
