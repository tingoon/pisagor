import {
  ArchiveIcon,
  CopyIcon,
  DotsThreeIcon,
  PaperPlaneTiltIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import type { BadgeVariant } from "@pisagor/react";
import {
  ActionBar,
  AlertDialog,
  Badge,
  Button,
  Checkbox,
  DropdownMenu,
  Table,
} from "@pisagor/react";
import { cn } from "@pisagor/utils";
import { useState } from "react";

export interface TableBulkActionsProps {
  className?: string;
}

export function TableBulkActions({ className }: TableBulkActionsProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const isOpen = selectedIds.length > 0;
  const allSelected = selectedIds.length > 0 && selectedIds.length === orders.length;

  const handleSelectAll = (checked: boolean | "indeterminate") => {
    if (checked) {
      setSelectedIds(orders.map((order) => order.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id: string, checked: boolean | "indeterminate") => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }
  };

  const handleClose = () => {
    setSelectedIds([]);
  };

  return (
    <div className={cn("rounded-lg border", className)}>
      <ActionBar onOpenChange={(open) => !open && handleClose()} open={isOpen}>
        <Table>
          <Table.Caption className="sr-only">
            Orders with checkbox selection and action bar.
          </Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head className="w-12">
                <Checkbox
                  aria-label="Select all orders"
                  checked={allSelected}
                  onCheckedChange={({ checked }) => handleSelectAll(checked)}
                />
              </Table.Head>
              <Table.Head>ID</Table.Head>
              <Table.Head>Name</Table.Head>
              <Table.Head>Status</Table.Head>
              <Table.Head>Amount</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {orders.map((order) => {
              const isSelected = selectedIds.includes(order.id);

              return (
                <Table.Row data-state={isSelected ? "selected" : undefined} key={order.id}>
                  <Table.Cell className="w-12">
                    <Checkbox
                      aria-label={`Select order ${order.id}`}
                      checked={isSelected}
                      onCheckedChange={({ checked }) => handleSelectRow(order.id, checked)}
                    />
                  </Table.Cell>
                  <Table.Cell className="font-medium">{order.id}</Table.Cell>
                  <Table.Cell>{order.name}</Table.Cell>
                  <Table.Cell>
                    <Badge className="capitalize" variant={statusVariants[order.status]}>
                      {order.status}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>{order.amount}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <ActionBar.Content>
          <ActionBar.Value count={selectedIds.length} />
          <div className="ml-auto flex gap-2">
            <Button size="sm" variant="secondary">
              <PaperPlaneTiltIcon />
              Send
            </Button>
            <Button size="sm" variant="secondary">
              <PencilSimpleIcon />
              Edit
            </Button>
            <DropdownMenu positioning={{ placement: "top" }}>
              <DropdownMenu.Trigger asChild>
                <Button size="sm" variant="secondary">
                  <DotsThreeIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item value="archive">
                  <ArchiveIcon />
                  Archive
                </DropdownMenu.Item>
                <DropdownMenu.Item value="duplicate">
                  <CopyIcon />
                  Duplicate
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <Button size="sm" variant="destructive">
                  <TrashIcon />
                  Delete
                </Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content>
                <AlertDialog.Header>
                  <AlertDialog.Title>Delete selected orders?</AlertDialog.Title>
                  <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Body>
                  <ul>
                    {selectedIds.map((id) => {
                      const order = orders.find((o) => o.id === id);

                      if (!order) {
                        return null;
                      }

                      return (
                        <li className="py-1 text-sm" key={id}>
                          {order.id} - {order.name}
                        </li>
                      );
                    })}
                  </ul>
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                  <AlertDialog.CloseTrigger asChild>
                    <AlertDialog.Action variant="destructive">Delete</AlertDialog.Action>
                  </AlertDialog.CloseTrigger>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </div>
        </ActionBar.Content>
      </ActionBar>
    </div>
  );
}

const statusVariants: Record<string, BadgeVariant> = {
  pending: "warning",
  progress: "info",
  transit: "success",
};

const orders = [
  {
    amount: "245,12 $",
    id: "SO-01",
    name: "Macbook Pro 16",
    status: "progress",
  },
  {
    amount: "122,18 $",
    id: "SO-02",
    name: "Apple Watch Series 9",
    status: "transit",
  },
  {
    amount: "89,50 $",
    id: "SO-03",
    name: "AirPods Max",
    status: "pending",
  },
  {
    amount: "310,00 $",
    id: "SO-04",
    name: "iPad Pro 13",
    status: "pending",
  },
  {
    amount: "156,75 $",
    id: "SO-05",
    name: "iPhone 15 Pro Max",
    status: "transit",
  },
];
