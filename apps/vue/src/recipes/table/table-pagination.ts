import { cn } from "@pisagor/utils";
import { Pagination } from "@pisagor/vue/pagination";
import { Select } from "@pisagor/vue/select";
import { Table } from "@pisagor/vue/table";
import { computed, defineComponent, h, type PropType, ref } from "vue";

export interface TablePaginationProps {
  class?: unknown;
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

type ArkPart = Parameters<typeof h>[0];

export const TablePagination = defineComponent({
  inheritAttrs: false,
  name: "TablePagination",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props) {
    const { Previous, Next } = Pagination as unknown as { Previous: ArkPart; Next: ArkPart };
    const page = ref(1);
    const pageSize = ref(2);

    const paginatedUsers = computed(() =>
      users.slice((page.value - 1) * pageSize.value, page.value * pageSize.value),
    );

    return () =>
      h("div", { class: cn("flex flex-col gap-2 rounded-xl border p-4", props.class) }, () => [
        h(Table as ArkPart, null, () => [
          h(Table.Header as ArkPart, null, () =>
            h(Table.Row as ArkPart, null, () => [
              h(Table.Head as ArkPart, null, () => "Name"),
              h(Table.Head as ArkPart, null, () => "Email"),
            ]),
          ),
          h(Table.Body as ArkPart, null, () =>
            paginatedUsers.value.map((user) =>
              h(Table.Row as ArkPart, { key: user.id }, () => [
                h(Table.Cell as ArkPart, null, () => user.name),
                h(Table.Cell as ArkPart, null, () => user.email),
              ]),
            ),
          ),
        ]),
        h("div", { class: "flex items-center justify-between gap-22" }, () => [
          h("div", { class: "flex shrink-0 items-center gap-2" }, () => [
            h("div", { class: "text-muted-foreground text-sm" }, () => "Items per page:"),
            h(
              Select as ArkPart,
              {
                items: ["2", "3", "4"],
                modelValue: [String(pageSize.value)],
                onValueChange: (value: string | string[]) => {
                  const next = Number(Array.isArray(value) ? value[0] : value);
                  pageSize.value = Number.isNaN(next) ? pageSize.value : next;
                },
              },
              () => undefined,
            ),
          ]),
          h(
            Pagination as ArkPart,
            {
              class: "flex-1 justify-end",
              count: users.length,
              onPageChange: (details: { page?: number }) => {
                if (typeof details?.page === "number") page.value = details.page;
              },
              onPageSizeChange: (details: { pageSize?: number }) => {
                if (typeof details?.pageSize === "number") pageSize.value = details.pageSize;
              },
              page: page.value,
              pageSize: pageSize.value,
            },
            () => [h(Previous, null), h(Next, null)],
          ),
        ]),
      ]);
  },
});
