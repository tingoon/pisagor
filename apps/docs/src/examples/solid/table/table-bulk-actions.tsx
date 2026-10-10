/** @jsxImportSource solid-js */

import {
  ActionBar,
  AlertDialog,
  Badge,
  Button,
  Checkbox,
  DropdownMenu,
  Table,
} from "@pisagor/solid";
import {
  ArchiveIcon,
  CopyIcon,
  DotsThreeIcon,
  PaperPlaneTiltIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@pisagor/solid/icons";
import { cn } from "@pisagor/utils";
import { createMemo, createSignal, For, Show } from "solid-js";
import { tableBulkActionsBlock } from "#/recipes/blocks/table";

const styles = tableBulkActionsBlock();

type BadgeVariant = "warning" | "info" | "success";

export interface TableBulkActionsProps {
  class?: string;
}

export function TableBulkActions(props: TableBulkActionsProps) {
  const [selectedIds, setSelectedIds] = createSignal<string[]>([]);

  const isOpen = () => selectedIds().length > 0;
  const allSelected = createMemo(
    () => selectedIds().length > 0 && selectedIds().length === orders.length,
  );

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
    <div class={cn(styles.root(), props.class)}>
      <ActionBar
        onOpenChange={(open) => !open && handleClose()}
        open={isOpen()}
      >
        <Table>
          <Table.Caption class={styles.srOnly()}>
            Orders with checkbox selection and action bar.
          </Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head class={styles.check()}>
                <Checkbox
                  aria-label="Select all orders"
                  checked={allSelected()}
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
            <For each={orders}>
              {(order) => {
                const isSelected = () => selectedIds().includes(order.id);
                return (
                  <Table.Row data-state={isSelected() ? "selected" : undefined}>
                    <Table.Cell class={styles.check()}>
                      <Checkbox
                        aria-label={`Select order ${order.id}`}
                        checked={isSelected()}
                        onCheckedChange={({ checked }) =>
                          handleSelectRow(order.id, checked)
                        }
                      />
                    </Table.Cell>
                    <Table.Cell class={styles.id()}>{order.id}</Table.Cell>
                    <Table.Cell>{order.name}</Table.Cell>
                    <Table.Cell>
                      <Badge
                        class={styles.status()}
                        variant={statusVariants[order.status]}
                      >
                        {order.status}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>{order.amount}</Table.Cell>
                  </Table.Row>
                );
              }}
            </For>
          </Table.Body>
        </Table>
        <ActionBar.Content>
          <ActionBar.Value count={selectedIds().length} />
          <div class={styles.actions()}>
            <Button size="sm" variant="secondary">
              <PaperPlaneTiltIcon />
              Send
            </Button>
            <Button size="sm" variant="secondary">
              <PencilSimpleIcon />
              Edit
            </Button>
            <DropdownMenu positioning={{ placement: "top" }}>
              <DropdownMenu.Trigger
                asChild={(triggerProps) => (
                  <Button {...triggerProps()} size="sm" variant="secondary">
                    <DotsThreeIcon />
                  </Button>
                )}
              />
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
              <AlertDialog.Trigger
                asChild={(triggerProps) => (
                  <Button {...triggerProps()} size="sm" variant="destructive">
                    <TrashIcon />
                    Delete
                  </Button>
                )}
              />
              <AlertDialog.Content>
                <AlertDialog.Header>
                  <AlertDialog.Title>Delete selected orders?</AlertDialog.Title>
                  <AlertDialog.Description>
                    This action cannot be undone.
                  </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Body>
                  <ul>
                    <For each={selectedIds()}>
                      {(id) => {
                        const order = () => orders.find((o) => o.id === id);
                        return (
                          <Show when={order()}>
                            {(o) => (
                              <li class={styles.deleteItem()}>
                                {o().id} - {o().name}
                              </li>
                            )}
                          </Show>
                        );
                      }}
                    </For>
                  </ul>
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                  <AlertDialog.CloseTrigger
                    asChild={(closeProps) => (
                      <AlertDialog.Action
                        {...closeProps()}
                        variant="destructive"
                      >
                        Delete
                      </AlertDialog.Action>
                    )}
                  />
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
