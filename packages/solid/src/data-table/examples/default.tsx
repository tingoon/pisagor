import { Table } from "../../components/table";
import { type ColumnDef, DataTable, dataTableFeatures } from "../index";

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
    <DataTable columns={columns} data={data} features={dataTableFeatures}>
      <Table>
        <Table.Header>
          <DataTable.Header>
            <DataTable.HeaderRow>
              <DataTable.Head />
            </DataTable.HeaderRow>
          </DataTable.Header>
        </Table.Header>
        <Table.Body>
          <DataTable.Body empty={<DataTable.Empty />}>
            <DataTable.Row>
              <DataTable.Cell />
            </DataTable.Row>
          </DataTable.Body>
        </Table.Body>
      </Table>
    </DataTable>
  );
}
