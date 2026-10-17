<script lang="ts">
  import { Table } from "@pisagor/svelte";
  import { DataGrid, dataGridFeatures } from "@pisagor/svelte/data-grid";
  import type { ExpandedState } from "@tanstack/svelte-table";

  type OrgNode = {
    budget: number;
    id: string;
    name: string;
    subRows?: OrgNode[];
  };

  const data: OrgNode[] = [
    {
      budget: 120000,
      id: "eng",
      name: "Engineering",
      subRows: [
        { budget: 70000, id: "eng-fe", name: "Frontend" },
        { budget: 50000, id: "eng-be", name: "Backend" },
      ],
    },
    {
      budget: 80000,
      id: "design",
      name: "Design",
      subRows: [
        { budget: 80000, id: "design-product", name: "Product Design" },
      ],
    },
  ];

  const columns = [
    { accessorKey: "name", header: "Department" },
    { accessorKey: "budget", header: "Budget" },
  ];

  let expanded = $state<ExpandedState>({ eng: true });

  function onExpandedChange(
    updater: ExpandedState | ((prev: ExpandedState) => ExpandedState),
  ) {
    expanded = typeof updater === "function" ? updater(expanded) : updater;
  }
</script>

<div class="flex w-full flex-col gap-3">
  <div class="bg-muted/20 rounded-xl border p-3">
    <DataGrid
      {columns}
      {data}
      features={dataGridFeatures}
      getRowId={(row: OrgNode) => row.id}
      getSubRows={(row: OrgNode) => row.subRows}
      {onExpandedChange}
      state={{ expanded }}
    >
      <DataGrid.Toolbar>
        <p class="text-sm font-medium">Expandable org tree</p>
      </DataGrid.Toolbar>
      <Table>
        <Table.Header>
          <DataGrid.Header>
            <DataGrid.HeaderRow>
              <DataGrid.Head />
            </DataGrid.HeaderRow>
          </DataGrid.Header>
        </Table.Header>
        <Table.Body>
          <DataGrid.Body>
            {#snippet empty()}
              <DataGrid.Empty />
            {/snippet}
            <DataGrid.Row>
              <DataGrid.Cell />
            </DataGrid.Row>
          </DataGrid.Body>
        </Table.Body>
      </Table>
    </DataGrid>
  </div>
</div>
