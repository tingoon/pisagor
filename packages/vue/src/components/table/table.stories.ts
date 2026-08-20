import { PhDotsThreeVertical, PhEye, PhPencilSimple, PhTrash } from "@phosphor-icons/vue";
import type { BadgeVariant } from "@pisagor/vue";
import { Badge, Button, DropdownMenu, Table } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          "Presents rows and columns of data in a structured grid for comparison and scanning.",
      },
    },
  },
  subcomponents: {
    Body: Table.Body,
    Caption: Table.Caption,
    Cell: Table.Cell,
    Footer: Table.Footer,
    Head: Table.Head,
    Header: Table.Header,
    Row: Table.Row,
  },
  title: "Components/Data Display/Table",
});

const workspaceUsers = [
  {
    email: "jane.doe@example.com",
    id: "1",
    name: "Jane Doe",
    role: "Admin",
    status: "active",
  },
  {
    email: "john.doe@example.com",
    id: "2",
    name: "John Doe",
    role: "Editor",
    status: "invited",
  },
  {
    email: "alex.morgan@example.com",
    id: "3",
    name: "Alex Morgan",
    role: "Viewer",
    status: "inactive",
  },
  {
    email: "sam.taylor@example.com",
    id: "4",
    name: "Sam Taylor",
    role: "Editor",
    status: "active",
  },
];

export const Default = meta.story({
  render: () => ({
    components: { Badge, Table },
    setup() {
      const statusVariants: Record<string, BadgeVariant> = {
        active: "success",
        inactive: "destructive",
        invited: "info",
      };

      return { statusVariants, workspaceUsers };
    },
    template: `
      <Table>
        <Table.Caption>A list of users in your workspace.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Role</Table.Head>
            <Table.Head class="text-center">Status</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row v-for="user in workspaceUsers" :key="user.id">
            <Table.Cell>{{ user.name }}</Table.Cell>
            <Table.Cell>{{ user.email }}</Table.Cell>
            <Table.Cell>{{ user.role }}</Table.Cell>
            <Table.Cell class="text-center">
              <Badge class="capitalize" :variant="statusVariants[user.status]">
                {{ user.status }}
              </Badge>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Table },
    setup() {
      return { workspaceUsers };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Table variant="plain">
          <Table.Caption class="sr-only">Default table variant.</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head>Name</Table.Head>
              <Table.Head>Email</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row v-for="user in workspaceUsers.slice(0, 3)" :key="user.id">
              <Table.Cell>{{ user.name }}</Table.Cell>
              <Table.Cell>{{ user.email }}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Table variant="striped">
          <Table.Caption class="sr-only">Striped table variant.</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head>Name</Table.Head>
              <Table.Head>Email</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row v-for="user in workspaceUsers.slice(0, 3)" :key="user.id">
              <Table.Cell>{{ user.name }}</Table.Cell>
              <Table.Cell>{{ user.email }}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    `,
  }),
});

export const Actions = meta.story({
  render: () => ({
    components: {
      Button,
      DropdownMenu,
      PhDotsThreeVertical,
      PhEye,
      PhPencilSimple,
      PhTrash,
      Table,
    },
    setup() {
      return { workspaceUsers };
    },
    template: `
      <Table>
        <Table.Caption class="sr-only">Users with row actions (edit, delete).</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head class="text-right">Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row v-for="user in workspaceUsers.slice(0, 3)" :key="user.id">
            <Table.Cell class="font-medium">{{ user.name }}</Table.Cell>
            <Table.Cell>{{ user.email }}</Table.Cell>
            <Table.Cell class="text-right">
              <DropdownMenu :positioning="{ placement: 'left-end' }">
                <DropdownMenu.Trigger as-child>
                  <Button size="icon-sm" variant="outline">
                    <PhDotsThreeVertical />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content class="min-w-40">
                  <DropdownMenu.Item value="view">
                    <PhEye />
                    View
                    <DropdownMenu.Shortcut>⌘ V</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item value="edit">
                    <PhPencilSimple />
                    Edit
                    <DropdownMenu.Shortcut>⌘ E</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item value="delete" variant="destructive">
                    <PhTrash />
                    Delete
                    <DropdownMenu.Shortcut>⌘ ⌫</DropdownMenu.Shortcut>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    `,
  }),
});

export const Footer = meta.story({
  render: () => ({
    components: { Table },
    setup() {
      const items = [
        { id: "1", item: "Wireless mouse", qty: 2, unitPrice: 29.99 },
        { id: "2", item: "Mechanical keyboard", qty: 1, unitPrice: 149.99 },
        { id: "3", item: "USB-C hub", qty: 3, unitPrice: 45.0 },
      ];

      return { items };
    },
    template: `
      <Table>
        <Table.Caption class="sr-only">Order summary with footer totals.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Item</Table.Head>
            <Table.Head class="text-right">Qty</Table.Head>
            <Table.Head class="text-right">Unit price</Table.Head>
            <Table.Head class="text-right">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row v-for="row in items" :key="row.id">
            <Table.Cell>{{ row.item }}</Table.Cell>
            <Table.Cell class="text-right">{{ row.qty }}</Table.Cell>
            <Table.Cell class="text-right">\${{ row.unitPrice.toFixed(2) }}</Table.Cell>
            <Table.Cell class="text-right">
              \${{ (row.qty * row.unitPrice).toFixed(2) }}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colspan="3">Total</Table.Cell>
            <Table.Cell class="text-right">$379.47</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    `,
  }),
});

export const NotHoverable = meta.story({
  render: () => ({
    components: { Table },
    setup() {
      return { workspaceUsers };
    },
    template: `
      <Table :isHoverable="false">
        <Table.Caption class="sr-only">Table with row hover disabled (isHoverable=false).</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row v-for="user in workspaceUsers.slice(0, 3)" :key="user.id">
            <Table.Cell>{{ user.name }}</Table.Cell>
            <Table.Cell>{{ user.email }}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    `,
  }),
});
