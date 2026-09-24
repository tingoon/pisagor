import { Table } from "../../components/table";
import { type ColumnDef, DataGrid, dataGridFeatures } from "../index";

type Person = { name: string; age: number };

const columns: ColumnDef<Person>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "age", header: "Age" },
];

const data: Person[] = [
  { age: 36, name: "Ada" },
  { age: 85, name: "Grace" },
];

export function Default() {
  return (
    <DataGrid columns={columns} data={data} features={dataGridFeatures}>
      <Table>
        <Table.Header>
          <DataGrid.Header>
            <DataGrid.HeaderRow>
              <DataGrid.Head />
            </DataGrid.HeaderRow>
          </DataGrid.Header>
        </Table.Header>
        <Table.Body>
          <DataGrid.Body empty={<DataGrid.Empty />}>
            <DataGrid.Row>
              <DataGrid.Cell />
            </DataGrid.Row>
          </DataGrid.Body>
        </Table.Body>
      </Table>
    </DataGrid>
  );
}
