import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Checkbox, Pagination, Spinner, Table } from "@pisagor/vue";
import {
  type CellContext,
  type ColumnDef,
  type HeaderContext,
  type PaginationState,
  type SortingState,
  useDataGrid,
} from "@pisagor/vue/data-grid";
import {
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  type PropType,
  ref,
} from "vue";
import { DataGrid } from "..";

type ArkPart = Parameters<typeof h>[0];

function applyUpdater<T>(current: T, updater: T | ((old: T) => T)): T {
  return typeof updater === "function"
    ? (updater as (old: T) => T)(current)
    : updater;
}

interface FullUser {
  department: string;
  email: string;
  id: string;
  joinedAt: string;
  name: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "active" | "inactive" | "invited";
}

const ROLES: FullUser["role"][] = ["Admin", "Editor", "Viewer"];

const STATUSES: FullUser["status"][] = ["active", "inactive", "invited"];

const DEPARTMENTS = [
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Support",
] as const;

const FIRST_NAMES = [
  "Alice",
  "Bruno",
  "Clara",
  "David",
  "Elena",
  "Felix",
  "Grace",
  "Hugo",
  "Iris",
  "Jonas",
  "Kira",
  "Leo",
  "Maya",
  "Noah",
  "Olivia",
];

const statusVariants: Record<FullUser["status"], BadgeVariant> = {
  active: "success",
  inactive: "destructive",
  invited: "info",
};

const allUsers: FullUser[] = Array.from({ length: 48 }, (_, index) => ({
  department:
    DEPARTMENTS[index % DEPARTMENTS.length] ?? DEPARTMENTS[0] ?? "Engineering",
  email: `user${index + 1}@example.com`,
  id: String(index + 1),
  joinedAt: new Date(
    2020 + (index % 5),
    index % 12,
    (index % 28) + 1,
  ).toISOString(),
  name: `${FIRST_NAMES[index % FIRST_NAMES.length] ?? "Alex"} ${String.fromCharCode(65 + (index % 26))}.`,
  role: ROLES[index % ROLES.length] ?? "Viewer",
  status: STATUSES[index % STATUSES.length] ?? "active",
}));

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

const SortIndicator = defineComponent({
  name: "SortIndicator",
  props: {
    direction: {
      default: false,
      type: [Boolean, String] as PropType<false | "asc" | "desc">,
    },
  },
  setup(props) {
    return () => {
      if (props.direction === "asc") {
        return h(PhCaretUp, { class: "size-3.5" });
      }

      if (props.direction === "desc") {
        return h(PhCaretDown, { class: "size-3.5" });
      }

      return null;
    };
  },
});

const DataGridShell = defineComponent({
  name: "DataGridShell",
  setup(_, { slots }) {
    return () =>
      h("div", { class: "flex w-full flex-col gap-3" }, () =>
        h("div", { class: "rounded-xl border bg-muted/20 p-3" }, () =>
          slots.default?.(),
        ),
      );
  },
});

const DataGridView = defineComponent({
  name: "DataGridView",
  props: {
    colSpan: { default: 5, type: Number },
    filterHead: { default: false, type: Boolean },
  },
  setup(props) {
    return () =>
      h(Table, null, () => [
        h(Table.Header, null, () =>
          h(DataGrid.Header, null, () =>
            h(DataGrid.HeaderRow, null, () =>
              h(DataGrid.Head, { filter: props.filterHead }),
            ),
          ),
        ),
        h(Table.Body, null, () =>
          h(
            DataGrid.Body,
            { empty: h(DataGrid.Empty, { colSpan: props.colSpan }) },
            () => h(DataGrid.Row, null, () => h(DataGrid.Cell)),
          ),
        ),
      ]);
  },
});

function sortableHeaderRenderer(label: string) {
  return (ctx: HeaderContext<FullUser, unknown>) =>
    h(
      "button",
      {
        class: "inline-flex items-center gap-1.5 font-medium",
        onClick: () =>
          ctx.column.toggleSorting(ctx.column.getIsSorted() === "asc"),
        type: "button",
      },
      [label, h(SortIndicator, { direction: ctx.column.getIsSorted() })],
    );
}

function userColumns(options?: {
  selectable?: boolean;
  sortable?: boolean;
}): ColumnDef<FullUser>[] {
  const { selectable = false, sortable = false } = options ?? {};
  const columns: ColumnDef<FullUser>[] = [];

  if (selectable) {
    columns.push({
      cell: ({ row }: CellContext<FullUser, unknown>) =>
        h(Checkbox, {
          "aria-label": `Select ${row.original.name}`,
          checked: row.getIsSelected(),
          onCheckedChange: (details: { checked: boolean | "indeterminate" }) =>
            row.toggleSelected(details.checked === true),
        }),
      enableHiding: false,
      enableSorting: false,
      header: ({ table }: HeaderContext<FullUser, unknown>) =>
        h(Checkbox, {
          "aria-label": "Select all on page",
          checked: table.getIsAllPageRowsSelected()
            ? true
            : table.getIsSomePageRowsSelected()
              ? "indeterminate"
              : false,
          onCheckedChange: (details: { checked: boolean | "indeterminate" }) =>
            table.toggleAllPageRowsSelected(details.checked === true),
        }),
      id: "select",
      size: 40,
    });
  }

  columns.push(
    {
      accessorKey: "name",
      enableColumnFilter: true,
      enableGrouping: false,
      enableHiding: false,
      header: sortable ? sortableHeaderRenderer("Name") : "Name",
    },
    {
      accessorKey: "email",
      enableColumnFilter: true,
      header: sortable ? sortableHeaderRenderer("Email") : "Email",
    },
    {
      accessorKey: "role",
      enableColumnFilter: true,
      filterFn: "equals",
      header: sortable ? sortableHeaderRenderer("Role") : "Role",
    },
    {
      accessorKey: "department",
      header: sortable ? sortableHeaderRenderer("Department") : "Department",
    },
    {
      accessorKey: "status",
      cell: ({ row }: CellContext<FullUser, unknown>) =>
        h(
          Badge as ArkPart,
          { class: "capitalize", variant: statusVariants[row.original.status] },
          () => row.original.status,
        ),
      enableColumnFilter: true,
      filterFn: "equals",
      header: "Status",
    },
    {
      accessorKey: "joinedAt",
      cell: ({ row }: CellContext<FullUser, unknown>) =>
        formatDate(row.original.joinedAt),
      header: sortable ? sortableHeaderRenderer("Joined") : "Joined",
      sortFn: "datetime",
    },
  );

  return columns;
}

const ManualPaginationBar = defineComponent({
  name: "ManualPaginationBar",
  props: {
    total: { required: true, type: Number },
  },
  setup(props) {
    return () => {
      const table = useDataGrid();
      const { pageIndex, pageSize } = table.store.state.pagination;
      const from = props.total === 0 ? 0 : pageIndex * pageSize + 1;
      const to = Math.min((pageIndex + 1) * pageSize, props.total);

      return h(
        "div",
        {
          class:
            "flex flex-wrap items-center justify-between gap-3 border-t pt-3",
        },
        [
          h(
            "p",
            { class: "text-muted-foreground text-sm" },
            `Showing ${from}–${to} of ${props.total}`,
          ),
          h(Pagination as ArkPart, {
            class: "mx-0 w-auto justify-end",
            count: props.total,
            onPageChange: (details: { page: number }) =>
              table.setPageIndex(details.page - 1),
            page: pageIndex + 1,
            pageSize,
          }),
        ],
      );
    };
  },
});

export function ManualPagination() {
  return {
    components: {
      DataGrid,
      DataGridShell,
      DataGridView,
      ManualPaginationBar,
      Spinner,
    },
    setup() {
      const pagination = ref<PaginationState>({ pageIndex: 0, pageSize: 6 });
      const sorting = ref<SortingState>([{ desc: false, id: "name" }]);
      const isFetching = ref(false);
      const columns = userColumns({ sortable: true });

      const sortedData = computed(() => {
        const next = [...allUsers];
        const sort = sorting.value[0];

        if (!sort) {
          return next;
        }

        next.sort((left, right) => {
          const leftValue = left[sort.id as keyof FullUser];
          const rightValue = right[sort.id as keyof FullUser];
          const comparison = String(leftValue).localeCompare(
            String(rightValue),
          );
          return sort.desc ? -comparison : comparison;
        });

        return next;
      });

      const pageCount = computed(() =>
        Math.ceil(sortedData.value.length / pagination.value.pageSize),
      );
      const pageData = computed(() =>
        sortedData.value.slice(
          pagination.value.pageIndex * pagination.value.pageSize,
          (pagination.value.pageIndex + 1) * pagination.value.pageSize,
        ),
      );

      let fetchTimer: number | undefined;

      const simulateFetch = () => {
        isFetching.value = true;
        window.clearTimeout(fetchTimer);
        fetchTimer = window.setTimeout(() => {
          isFetching.value = false;
        }, 450);
      };

      onMounted(simulateFetch);
      onBeforeUnmount(() => window.clearTimeout(fetchTimer));

      const handlePaginationChange = (
        updater: PaginationState | ((old: PaginationState) => PaginationState),
      ) => {
        pagination.value = applyUpdater(pagination.value, updater);
        simulateFetch();
      };

      const handleSortingChange = (
        updater: SortingState | ((old: SortingState) => SortingState),
      ) => {
        sorting.value = applyUpdater(sorting.value, updater);
        simulateFetch();
      };

      const state = computed(() => ({
        pagination: pagination.value,
        sorting: sorting.value,
      }));

      return {
        columns,
        handlePaginationChange,
        handleSortingChange,
        isFetching,
        pageCount,
        pageData,
        sortedData,
        state,
      };
    },
    template: `
        <DataGridShell>
          <div class="relative">
            <div
              v-if="isFetching"
              class="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-background/70"
            >
              <Spinner />
            </div>
            <DataGrid
              :columns="columns"
              :data="pageData"
              :manualPagination="true"
              :manualSorting="true"
              :onPaginationChange="handlePaginationChange"
              :onSortingChange="handleSortingChange"
              :pageCount="pageCount"
              :state="state"
            >
              <DataGrid.Toolbar>
                <p class="text-muted-foreground text-sm">
                  Server-style table: <code class="text-xs">manualPagination</code> +
                  <code class="text-xs">manualSorting</code> with a simulated fetch delay.
                </p>
              </DataGrid.Toolbar>
              <DataGridView :colSpan="6" />
              <ManualPaginationBar :total="sortedData.length" />
            </DataGrid>
          </div>
        </DataGridShell>
      `,
  };
}
