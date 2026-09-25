import { Table } from "@pisagor/astro/table";

export default {
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          "Displays tabular data with semantic table structure and styling.",
      },
    },
  },
  title: "Components/Data Display/Table",
};

export const Playground = {
  render: () => ({
    component: Table,
    slots: {
      default: [
        {
          component: Table.Caption,
          slots: { default: "A list of recent invoices." },
        },
        {
          component: Table.Header,
          slots: {
            default: {
              component: Table.Row,
              slots: {
                default: [
                  { component: Table.Head, slots: { default: "Invoice" } },
                  { component: Table.Head, slots: { default: "Status" } },
                  { component: Table.Head, slots: { default: "Amount" } },
                ],
              },
            },
          },
        },
        {
          component: Table.Body,
          slots: {
            default: [
              {
                component: Table.Row,
                slots: {
                  default: [
                    { component: Table.Cell, slots: { default: "INV-001" } },
                    { component: Table.Cell, slots: { default: "Paid" } },
                    { component: Table.Cell, slots: { default: "$250.00" } },
                  ],
                },
              },
              {
                component: Table.Row,
                slots: {
                  default: [
                    { component: Table.Cell, slots: { default: "INV-002" } },
                    { component: Table.Cell, slots: { default: "Pending" } },
                    { component: Table.Cell, slots: { default: "$150.00" } },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  }),
  tags: ["autodocs"],
};
