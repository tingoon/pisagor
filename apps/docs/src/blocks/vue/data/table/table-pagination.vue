<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import { Button, Pagination, Select, Table } from "@pisagor/vue";
import { computed, ref } from "vue";
import { tablePaginationBlock } from "#/styles/recipes/table";

defineOptions({ inheritAttrs: false });

const props = defineProps<{ class?: unknown }>();

const styles = tablePaginationBlock();

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

const page = ref(1);
const pageSize = ref(2);

const paginatedUsers = computed(() =>
  users.slice((page.value - 1) * pageSize.value, page.value * pageSize.value),
);

function onPageSizeSelect(details: string | string[] | { value: string[] }) {
  const value =
    typeof details === "object" && !Array.isArray(details)
      ? details.value[0]
      : Array.isArray(details)
        ? details[0]
        : details;
  const next = Number(value);
  if (!Number.isNaN(next)) pageSize.value = next;
}
</script>

<template>
  <div :class="cn(styles.root(), props.class)">
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row v-for="user in paginatedUsers" :key="user.id">
          <Table.Cell>{{ user.name }}</Table.Cell>
          <Table.Cell>{{ user.email }}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <div :class="styles.toolbar()">
      <div :class="styles.pageSize()">
        <div :class="styles.pageSizeLabel()">Items per page:</div>
        <Select
          :items="['2', '3', '4']"
          :model-value="[String(pageSize)]"
          @value-change="onPageSizeSelect"
        />
      </div>
      <Pagination.Root
        :class="styles.pagination()"
        :count="users.length"
        :page="page"
        :page-size="pageSize"
        @page-change="(details: { page: number }) => (page = details.page)"
        @page-size-change="
          (details: { pageSize: number }) => (pageSize = details.pageSize)
        "
      >
        <Pagination.PrevTrigger as-child>
          <Button variant="ghost">
            <PhCaretLeft />
            Previous
          </Button>
        </Pagination.PrevTrigger>
        <Pagination.NextTrigger as-child>
          <Button variant="ghost">
            Next
            <PhCaretRight />
          </Button>
        </Pagination.NextTrigger>
      </Pagination.Root>
    </div>
  </div>
</template>
