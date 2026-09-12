import Table from "./table.astro";
import TableBody from "./table-body.astro";
import TableCaption from "./table-caption.astro";
import TableCell from "./table-cell.astro";
import TableHead from "./table-head.astro";
import TableHeader from "./table-header.astro";
import TableRow from "./table-row.astro";

export default {
  component: Table,
  parameters: {
    docs: {
      description: {
        component: "Displays tabular data with semantic table structure and styling.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  title: "Components/Data Display/Table",
};

export const Default = {
  render: () => ({
    component: Table,
    slots: {
      default: [
        {
          component: TableCaption,
          slots: { default: "A list of recent invoices." },
        },
        {
          component: TableHeader,
          slots: {
            default: {
              component: TableRow,
              slots: {
                default: [
                  { component: TableHead, slots: { default: "Invoice" } },
                  { component: TableHead, slots: { default: "Status" } },
                  { component: TableHead, slots: { default: "Amount" } },
                ],
              },
            },
          },
        },
        {
          component: TableBody,
          slots: {
            default: [
              {
                component: TableRow,
                slots: {
                  default: [
                    { component: TableCell, slots: { default: "INV-001" } },
                    { component: TableCell, slots: { default: "Paid" } },
                    { component: TableCell, slots: { default: "$250.00" } },
                  ],
                },
              },
              {
                component: TableRow,
                slots: {
                  default: [
                    { component: TableCell, slots: { default: "INV-002" } },
                    { component: TableCell, slots: { default: "Pending" } },
                    { component: TableCell, slots: { default: "$150.00" } },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  }),
};
