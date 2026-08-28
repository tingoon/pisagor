import { DotsThreeVerticalIcon, EyeIcon, PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import preview from "#/storybook/preview";
import type { BadgeVariant } from "..";
import { Badge, Button, DropdownMenu, Table } from "..";

const meta = preview.meta({
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          "Presents rows and columns of data in a structured grid for comparison and scanning.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
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

export const Default = meta.story({
  render: () => {
    const statusVariants: Record<string, BadgeVariant> = {
      active: "success",
      inactive: "destructive",
      invited: "info",
    };

    return (
      <Table>
        <Table.Caption>A list of users in your workspace.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Role</Table.Head>
            <Table.Head className="text-center">Status</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {workspaceUsers.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell className="text-center">
                <Badge className="capitalize" variant={statusVariants[user.status]}>
                  {user.status}
                </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Table variant="plain">
        <Table.Caption className="sr-only">Default table variant.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {workspaceUsers.slice(0, 3).map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Table variant="striped">
        <Table.Caption className="sr-only">Striped table variant.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {workspaceUsers.slice(0, 3).map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  ),
});

export const Actions = meta.story({
  render: () => {
    return (
      <Table>
        <Table.Caption className="sr-only">Users with row actions (edit, delete).</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head className="text-right">Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {workspaceUsers.slice(0, 3).map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell className="font-medium">{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell className="text-right">
                <DropdownMenu positioning={{ placement: "left-end" }}>
                  <DropdownMenu.Trigger asChild>
                    <Button aria-label="More options" size="icon-sm" variant="outline">
                      <DotsThreeVerticalIcon />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content className="min-w-40">
                    <DropdownMenu.Item value="view">
                      <EyeIcon />
                      View
                      <DropdownMenu.Shortcut>⌘ V</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item value="edit">
                      <PencilSimpleIcon />
                      Edit
                      <DropdownMenu.Shortcut>⌘ E</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item value="delete" variant="destructive">
                      <TrashIcon />
                      Delete
                      <DropdownMenu.Shortcut>⌘ ⌫</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
});

export const Footer = meta.story({
  render: () => {
    const items = [
      { id: "1", item: "Wireless mouse", qty: 2, unitPrice: 29.99 },
      { id: "2", item: "Mechanical keyboard", qty: 1, unitPrice: 149.99 },
      { id: "3", item: "USB-C hub", qty: 3, unitPrice: 45.0 },
    ];
    return (
      <Table>
        <Table.Caption className="sr-only">Order summary with footer totals.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Item</Table.Head>
            <Table.Head className="text-right">Qty</Table.Head>
            <Table.Head className="text-right">Unit price</Table.Head>
            <Table.Head className="text-right">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.item}</Table.Cell>
              <Table.Cell className="text-right">{row.qty}</Table.Cell>
              <Table.Cell className="text-right">${row.unitPrice.toFixed(2)}</Table.Cell>
              <Table.Cell className="text-right">
                ${(row.qty * row.unitPrice).toFixed(2)}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={3}>Total</Table.Cell>
            <Table.Cell className="text-right">$379.47</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  },
});

export const NotHoverable = meta.story({
  render: () => (
    <Table isHoverable={false}>
      <Table.Caption className="sr-only">
        Table with row hover disabled (isHoverable=false).
      </Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {workspaceUsers.slice(0, 3).map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
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
