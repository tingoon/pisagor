<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import type { BadgeVariantProps } from "@pisagor/recipes";
  import {
    ActionBar,
    AlertDialog,
    Badge,
    Button,
    Checkbox,
    DropdownMenu,
    Table,
  } from "@pisagor/svelte";
  import { cn } from "@pisagor/utils";
  import {
    ArchiveIcon,
    CopyIcon,
    DotsThreeIcon,
    PaperPlaneTiltIcon,
    PencilSimpleIcon,
    TrashIcon,
  } from "phosphor-svelte";
  import { tableBulkActionsBlock } from "#/styles/recipes/table";

  const styles = tableBulkActionsBlock();

  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();

  let selectedIds = $state<string[]>([]);

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
    { amount: "89,50 $", id: "SO-03", name: "AirPods Max", status: "pending" },
    { amount: "310,00 $", id: "SO-04", name: "iPad Pro 13", status: "pending" },
    {
      amount: "156,75 $",
      id: "SO-05",
      name: "iPhone 15 Pro Max",
      status: "transit",
    },
  ];

  const statusVariants: Record<
    string,
    NonNullable<BadgeVariantProps["variant"]>
  > = {
    pending: "warning",
    progress: "info",
    transit: "success",
  };

  const isOpen = $derived(selectedIds.length > 0);
  const allSelected = $derived(
    selectedIds.length > 0 && selectedIds.length === orders.length,
  );

  function handleSelectAll(checked: boolean | "indeterminate") {
    selectedIds = checked ? orders.map((o) => o.id) : [];
  }

  function handleSelectRow(id: string, checked: boolean | "indeterminate") {
    selectedIds = checked
      ? [...selectedIds, id]
      : selectedIds.filter((item) => item !== id);
  }
</script>

<div class={cn(styles.root(), className)}>
  <ActionBar.Root
    onOpenChange={(open: boolean) => {
      if (!open) selectedIds = [];
    }}
    open={isOpen}
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
              checked={allSelected}
              onCheckedChange={({
                checked,
              }: {
                checked: boolean | "indeterminate";
              }) => handleSelectAll(checked)}
            />
          </Table.Head>
          <Table.Head>ID</Table.Head>
          <Table.Head>Name</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each orders as order}
          <Table.Row
            data-state={selectedIds.includes(order.id) ? "selected" : undefined}
          >
            <Table.Cell class={styles.check()}>
              <Checkbox
                aria-label={`Select order ${order.id}`}
                checked={selectedIds.includes(order.id)}
                onCheckedChange={({
                  checked,
                }: {
                  checked: boolean | "indeterminate";
                }) => handleSelectRow(order.id, checked)}
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
        {/each}
      </Table.Body>
    </Table>
    <Portal>
      <ActionBar.Positioner>
        <ActionBar.Content>
          <ActionBar.Value count={selectedIds.length} />
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
              {#snippet trigger(props)}
                <Button {...props()} size="sm" variant="secondary">
                  <DotsThreeIcon />
                </Button>
              {/snippet}

              <DropdownMenu.Item value="archive">
                <ArchiveIcon />
                Archive
              </DropdownMenu.Item>
              <DropdownMenu.Item value="duplicate">
                <CopyIcon />
                Duplicate
              </DropdownMenu.Item>
            </DropdownMenu>
            <AlertDialog
              description="This action cannot be undone."
              title="Delete selected orders?"
            >
              {#snippet trigger(props)}
                <Button {...props()} size="sm" variant="destructive">
                  <TrashIcon />
                  Delete
                </Button>
              {/snippet}
              {#snippet actions()}
                <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                <AlertDialog.Action variant="destructive"
                  >Delete</AlertDialog.Action
                >
              {/snippet}

              <ul>
                {#each selectedIds as id}
                  {#each orders.filter((o) => o.id === id) as order}
                    <li class={styles.deleteItem()}>
                      {order.id}
                      - {order.name}
                    </li>
                  {/each}
                {/each}
              </ul>
            </AlertDialog>
          </div>
        </ActionBar.Content>
      </ActionBar.Positioner>
    </Portal>
  </ActionBar.Root>
</div>
