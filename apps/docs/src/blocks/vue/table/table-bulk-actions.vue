<script lang="ts" setup>
import {
  PhArchive,
  PhCopy,
  PhDotsThree,
  PhPaperPlaneTilt,
  PhPencil,
  PhTrash,
} from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import {
  ActionBar,
  AlertDialog,
  Badge,
  Button,
  Checkbox,
  DropdownMenu,
  Table,
} from "@pisagor/vue";
import { computed, ref } from "vue";
import { tableBulkActionsBlock } from "#/styles/recipes/table";

defineOptions({ inheritAttrs: false });

const props = defineProps<{ class?: unknown }>();

const styles = tableBulkActionsBlock();

const statusVariants: Record<string, "warning" | "info" | "success"> = {
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
  { amount: "89,50 $", id: "SO-03", name: "AirPods Max", status: "pending" },
  { amount: "310,00 $", id: "SO-04", name: "iPad Pro 13", status: "pending" },
  {
    amount: "156,75 $",
    id: "SO-05",
    name: "iPhone 15 Pro Max",
    status: "transit",
  },
];

type CheckedState = { checked: boolean | "indeterminate" };

const selectedIds = ref<string[]>([]);

const isOpen = computed(() => selectedIds.value.length > 0);
const allSelected = computed(
  () =>
    selectedIds.value.length > 0 && selectedIds.value.length === orders.length,
);
const selectedOrders = computed(() =>
  orders.filter((order) => selectedIds.value.includes(order.id)),
);

function handleSelectAll({ checked }: CheckedState) {
  selectedIds.value = checked ? orders.map((order) => order.id) : [];
}

function handleSelectRow(id: string, { checked }: CheckedState) {
  if (checked) {
    if (!selectedIds.value.includes(id)) {
      selectedIds.value = [...selectedIds.value, id];
    }
  } else {
    selectedIds.value = selectedIds.value.filter((item) => item !== id);
  }
}

function onOpenChange(details: boolean | { open: boolean }) {
  const open = typeof details === "boolean" ? details : details.open;
  if (!open) selectedIds.value = [];
}
</script>

<template>
  <div :class="cn(styles.root(), props.class)">
    <ActionBar :open="isOpen" @open-change="onOpenChange">
      <Table>
        <Table.Caption :class="styles.srOnly()">
          Orders with checkbox selection and action bar.
        </Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head :class="styles.check()">
              <Checkbox
                aria-label="Select all orders"
                :checked="allSelected"
                @checked-change="handleSelectAll"
              />
            </Table.Head>
            <Table.Head>ID</Table.Head>
            <Table.Head>Name</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row
            v-for="order in orders"
            :key="order.id"
            :data-state="
              selectedIds.includes(order.id) ? 'selected' : undefined
            "
          >
            <Table.Cell :class="styles.check()">
              <Checkbox
                :aria-label="`Select order ${order.id}`"
                :checked="selectedIds.includes(order.id)"
                @checked-change="
                  (details: CheckedState) => handleSelectRow(order.id, details)
                "
              />
            </Table.Cell>
            <Table.Cell>{{ order.id }}</Table.Cell>
            <Table.Cell>{{ order.name }}</Table.Cell>
            <Table.Cell>
              <Badge
                :class="styles.status()"
                :variant="statusVariants[order.status]"
              >
                {{ order.status }}
              </Badge>
            </Table.Cell>
            <Table.Cell>{{ order.amount }}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <ActionBar.Content>
        <ActionBar.Value :count="selectedIds.length" />
        <div :class="styles.actions()">
          <Button size="sm" type="button" variant="secondary">
            <PhPaperPlaneTilt aria-hidden="true" />
            Send
          </Button>
          <Button size="sm" type="button" variant="secondary">
            <PhPencil aria-hidden="true" />
            Edit
          </Button>
          <DropdownMenu :positioning="{ placement: 'top' }">
            <DropdownMenu.Trigger as-child>
              <Button
                aria-label="More actions"
                size="sm"
                type="button"
                variant="secondary"
              >
                <PhDotsThree aria-hidden="true" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item value="archive">
                <PhArchive aria-hidden="true" />
                Archive
              </DropdownMenu.Item>
              <DropdownMenu.Item value="duplicate">
                <PhCopy aria-hidden="true" />
                Duplicate
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
          <AlertDialog>
            <AlertDialog.Trigger as-child>
              <Button size="sm" type="button" variant="destructive">
                <PhTrash aria-hidden="true" />
                Delete
              </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Header
                description="This action cannot be undone."
                title="Delete selected orders?"
              />
              <AlertDialog.Body>
                <ul>
                  <li
                    v-for="order in selectedOrders"
                    :key="order.id"
                    :class="styles.deleteItem()"
                  >
                    {{ order.id }} - {{ order.name }}
                  </li>
                </ul>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                <AlertDialog.CloseTrigger as-child>
                  <AlertDialog.Action variant="destructive">
                    Delete
                  </AlertDialog.Action>
                </AlertDialog.CloseTrigger>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </div>
      </ActionBar.Content>
    </ActionBar>
  </div>
</template>
