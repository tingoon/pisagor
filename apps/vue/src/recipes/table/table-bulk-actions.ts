import {
  PhArchive,
  PhCopy,
  PhDotsThree,
  PhPaperPlaneTilt,
  PhPencil,
  PhTrash,
} from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import { ActionBar, AlertDialog, Badge, Button, Checkbox, DropdownMenu, Table } from "@pisagor/vue";
import { computed, defineComponent, h, type PropType, ref } from "vue";

export interface TableBulkActionsProps {
  class?: unknown;
}

const statusVariants: Record<string, "warning" | "info" | "success"> = {
  pending: "warning",
  progress: "info",
  transit: "success",
};

const orders = [
  { amount: "245,12 $", id: "SO-01", name: "Macbook Pro 16", status: "progress" },
  { amount: "122,18 $", id: "SO-02", name: "Apple Watch Series 9", status: "transit" },
  { amount: "89,50 $", id: "SO-03", name: "AirPods Max", status: "pending" },
  { amount: "310,00 $", id: "SO-04", name: "iPad Pro 13", status: "pending" },
  { amount: "156,75 $", id: "SO-05", name: "iPhone 15 Pro Max", status: "transit" },
];

type ArkPart = Parameters<typeof h>[0];

export const TableBulkActions = defineComponent({
  inheritAttrs: false,
  name: "TableBulkActions",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props) {
    const selectedIds = ref<string[]>([]);

    const isOpen = computed(() => selectedIds.value.length > 0);
    const allSelected = computed(
      () => selectedIds.value.length > 0 && selectedIds.value.length === orders.length,
    );

    const handleSelectAll = (checked: boolean | "indeterminate") => {
      if (checked) {
        selectedIds.value = orders.map((order) => order.id);
      } else {
        selectedIds.value = [];
      }
    };

    const handleSelectRow = (id: string, checked: boolean | "indeterminate") => {
      if (checked) {
        if (!selectedIds.value.includes(id)) selectedIds.value = [...selectedIds.value, id];
      } else {
        selectedIds.value = selectedIds.value.filter((item) => item !== id);
      }
    };

    const handleClose = () => {
      selectedIds.value = [];
    };

    return () =>
      h("div", { class: cn("rounded-lg border", props.class) }, () =>
        h(
          ActionBar as ArkPart,
          {
            onOpenChange: (open: boolean) => {
              if (!open) handleClose();
            },
            open: isOpen.value,
          },
          () => [
            h(Table as ArkPart, null, () => [
              h(
                Table.Caption as ArkPart,
                { class: "sr-only" },
                () => "Orders with checkbox selection and action bar.",
              ),
              h(Table.Header as ArkPart, null, () =>
                h(Table.Row as ArkPart, null, () => [
                  h(Table.Head as ArkPart, { class: "w-12" }, () =>
                    h(Checkbox as ArkPart, {
                      "aria-label": "Select all orders",
                      checked: allSelected.value,
                      onCheckedChange: (details: { checked: boolean | "indeterminate" }) =>
                        handleSelectAll(details.checked),
                    }),
                  ),
                  h(Table.Head as ArkPart, null, () => "ID"),
                  h(Table.Head as ArkPart, null, () => "Name"),
                  h(Table.Head as ArkPart, null, () => "Status"),
                  h(Table.Head as ArkPart, null, () => "Amount"),
                ]),
              ),
              h(Table.Body as ArkPart, null, () =>
                orders.map((order) => {
                  const isSelected = selectedIds.value.includes(order.id);

                  return h(
                    Table.Row as ArkPart,
                    { "data-state": isSelected ? "selected" : undefined, key: order.id },
                    () => [
                      h(Table.Cell as ArkPart, { class: "w-12" }, () =>
                        h(Checkbox as ArkPart, {
                          "aria-label": `Select order ${order.id}`,
                          checked: isSelected,
                          onCheckedChange: (details: { checked: boolean | "indeterminate" }) =>
                            handleSelectRow(order.id, details.checked),
                        }),
                      ),
                      h(Table.Cell as ArkPart, null, () => order.id),
                      h(Table.Cell as ArkPart, null, () => order.name),
                      h(Table.Cell as ArkPart, null, () =>
                        h(
                          Badge as ArkPart,
                          { class: "capitalize", variant: statusVariants[order.status] },
                          () => order.status,
                        ),
                      ),
                      h(Table.Cell as ArkPart, null, () => order.amount),
                    ],
                  );
                }),
              ),
            ]),
            h(ActionBar.Content as ArkPart, null, () => [
              h(ActionBar.Value as ArkPart, { count: selectedIds.value.length }),
              h("div", { class: "ml-auto flex gap-2" }, () => [
                h(Button as ArkPart, { size: "sm", type: "button", variant: "secondary" }, () => [
                  h(PhPaperPlaneTilt, { "aria-hidden": true }),
                  "Send",
                ]),
                h(Button as ArkPart, { size: "sm", type: "button", variant: "secondary" }, () => [
                  h(PhPencil, { "aria-hidden": true }),
                  "Edit",
                ]),
                h(DropdownMenu as ArkPart, { positioning: { placement: "top" } }, () => [
                  h(DropdownMenu.Trigger as ArkPart, { asChild: true }, () =>
                    h(Button as ArkPart, { size: "sm", type: "button", variant: "secondary" }, () =>
                      h(PhDotsThree, { "aria-hidden": true }),
                    ),
                  ),
                  h(DropdownMenu.Content as ArkPart, null, () => [
                    h(DropdownMenu.Item as ArkPart, { value: "archive" }, () => [
                      h(PhArchive, { "aria-hidden": true }),
                      "Archive",
                    ]),
                    h(DropdownMenu.Item as ArkPart, { value: "duplicate" }, () => [
                      h(PhCopy, { "aria-hidden": true }),
                      "Duplicate",
                    ]),
                  ]),
                ]),
                h(AlertDialog as ArkPart, null, () => [
                  h(AlertDialog.Trigger as ArkPart, { asChild: true }, () =>
                    h(
                      Button as ArkPart,
                      { size: "sm", type: "button", variant: "destructive" },
                      () => [h(PhTrash, { "aria-hidden": true }), "Delete"],
                    ),
                  ),
                  h(AlertDialog.Content as ArkPart, null, () => [
                    h(
                      AlertDialog.Header as ArkPart,
                      {
                        description: "This action cannot be undone.",
                        title: "Delete selected orders?",
                      },
                      () => undefined,
                    ),
                    h(AlertDialog.Body as ArkPart, null, () => [
                      h("ul", null, () =>
                        selectedIds.value.map((id) => {
                          const order = orders.find((o) => o.id === id);
                          if (!order) return null;
                          return h(
                            "li",
                            { class: "py-1 text-sm", key: id },
                            () => `${order.id} - ${order.name}`,
                          );
                        }),
                      ),
                    ]),
                    h(AlertDialog.Footer as ArkPart, null, () => [
                      h(AlertDialog.Cancel as ArkPart, null, () => "Cancel"),
                      h(AlertDialog.Close as ArkPart, { asChild: true }, () =>
                        h(
                          AlertDialog.Action as ArkPart,
                          { variant: "destructive" },
                          () => "Delete",
                        ),
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ],
        ),
      );
  },
});
