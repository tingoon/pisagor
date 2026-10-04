<script lang="ts">
import { tablePaginationBlock } from "@pisagor/recipes/blocks/table";
import { Pagination, Select, Table } from "@pisagor/svelte";
import { cn } from "@pisagor/utils";

const styles = tablePaginationBlock();

interface Props {
  class?: string;
}
let { class: className }: Props = $props();

let page = $state(1);
let pageSize = $state(2);

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

const paginatedUsers = $derived(
  users.slice((page - 1) * pageSize, page * pageSize),
);
</script>

<div class={cn(styles.root(), className)}>
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.Head>Name</Table.Head>
        <Table.Head>Email</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each paginatedUsers as user}
        <Table.Row>
          <Table.Cell>{user.name}</Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table>
  <div class={styles.toolbar()}>
    <div class={styles.pageSize()}>
      <div class={styles.pageSizeLabel()}>Items per page:</div>
      <Select
        items={["2", "3", "4"]}
        onValueChange={(value) =>
          (pageSize = Number(Array.isArray(value) ? value[0] : value))}
        value={[String(pageSize)]}
      />
    </div>
    <Pagination
      class={styles.pagination()}
      count={users.length}
      onPageChange={({ page: next }) => (page = next)}
      onPageSizeChange={({ pageSize: next }) => (pageSize = next)}
      {page}
      {pageSize}
    >
      <Pagination.PrevTrigger />
      <Pagination.NextTrigger />
    </Pagination>
  </div>
</div>
