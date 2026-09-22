import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { PhCaretUpDown } from "@phosphor-icons/vue";
import { Button, Input, Popover } from "@pisagor/vue";
import { computed, defineComponent, h, ref } from "vue";
import type { ArkPart } from "../../../internal/types";
import { Listbox } from "..";
export default defineComponent({
  name: "WithPopover",
  setup() {
    const search = ref("");
    const isOpen = ref(false);
    const filterUtils = useFilter({ sensitivity: "base" });
    const { collection, filter } = useListCollection({
      filter: filterUtils.value.contains,
      initialItems: [
        { label: "Brazil", value: "br" },
        { label: "Mexico", value: "mx" },
        { label: "Ireland", value: "ie" },
        { label: "Canada", value: "ca" },
      ],
    });

    const isEmpty = computed(() => collection.value.items.length === 0 && search.value !== "");

    const onSearchChange = (next: string) => {
      search.value = next;
      filter(next);
    };

    return () =>
      h(
        Listbox.Root as ArkPart,
        {
          collection: collection.value,
          onSelect: () => {
            isOpen.value = false;
          },
        },
        () =>
          h(
            Popover as ArkPart,
            {
              onOpenChange: ({ open }: { open: boolean }) => {
                isOpen.value = open;
              },
              open: isOpen.value,
            },
            () => [
              h(Popover.Trigger as ArkPart, { asChild: true }, () =>
                h(Button as ArkPart, { class: "justify-between", variant: "outline" }, () => [
                  h(Listbox.ValueText as ArkPart, { placeholder: "Select framework" }),
                  h(PhCaretUpDown as ArkPart, { class: "opacity-64" }),
                ]),
              ),
              h(Popover.Content as ArkPart, { class: "min-w-64 gap-2 p-1" }, () => [
                h(Input as ArkPart, {
                  onValueChange: onSearchChange,
                  placeholder: "Search...",
                  value: search.value,
                }),
                h(Listbox.Content as ArkPart, null, () => [
                  ...collection.value.items.map((item) =>
                    h(Listbox.Item as ArkPart, { item, key: item.value }, () => [
                      h(Listbox.ItemText as ArkPart, null, () => item.label),
                      h(Listbox.ItemIndicator as ArkPart),
                    ]),
                  ),
                  isEmpty.value
                    ? h(
                        Listbox.Empty as ArkPart,
                        null,
                        () => "No results found. Try a different search.",
                      )
                    : null,
                ]),
              ]),
            ],
          ),
      );
  },
});
