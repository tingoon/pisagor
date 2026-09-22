import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { PhArrowBendDownLeft } from "@phosphor-icons/vue";
import { Button, Kbd } from "@pisagor/vue";
import { defineComponent, h, ref } from "vue";
import type { ArkPart } from "../../../internal/types";
import { Command } from "..";
export default defineComponent({
  name: "WithDialog",
  setup() {
    const initialItems = [
      { group: "File", label: "New file", shortcut: "⌘N", value: "new" },
      { group: "File", label: "Save", shortcut: "⌘S", value: "save" },
      { group: "File", label: "Open", shortcut: "⌘O", value: "open" },
      { group: "Edit", label: "Undo", shortcut: "⌘Z", value: "undo" },
      { group: "Edit", label: "Redo", shortcut: "⌘Z", value: "redo" },
      { group: "Edit", label: "Cut", shortcut: "⌘X", value: "cut" },
      { group: "Edit", label: "Copy", shortcut: "⌘C", value: "copy" },
    ];
    const open = ref(false);
    const { contains } = useFilter({ sensitivity: "base" }).value;
    const { collection, filter } = useListCollection({
      filter: contains,
      groupBy: (item) => item.group,
      initialItems,
    });

    return () =>
      h(
        Command.Dialog,
        {
          onOpenChange: (details: { open: boolean }) => {
            open.value = details.open;
          },
          open: open.value,
        },
        () => [
          h(Command.DialogTrigger, { asChild: true }, () =>
            h(Button, { variant: "outline" }, () => "Open Command Palette"),
          ),
          h(Command.DialogContent, null, () =>
            h(
              Command,
              {
                collection: collection.value,
                onInputValueChange: (details: { inputValue: string }) => filter(details.inputValue),
                onValueChange: () => {
                  open.value = false;
                },
              },
              () => [
                h(Command.Input, { placeholder: "Search commands..." }),
                h(Command.Content, null, () => [
                  h(Command.Empty, null, () => "No results found. Try a different search."),
                  h(Command.List, null, () =>
                    collection.value
                      .group()
                      .map(([group, items]) =>
                        h(Command.ItemGroup, { heading: group, key: group }, () =>
                          items.map((item) =>
                            h(Command.Item as ArkPart, { item, key: item.value }, () => [
                              item.label,
                              h(Command.Shortcut, null, () => item.shortcut),
                            ]),
                          ),
                        ),
                      ),
                  ),
                ]),
                h(Command.Footer, null, () =>
                  h("div", { class: "flex items-center gap-2" }, [
                    h(Kbd, { variant: "outline" }, () =>
                      h(PhArrowBendDownLeft, { class: "size-3" }),
                    ),
                    h("span", { class: "text-muted-foreground" }, "To select"),
                  ]),
                ),
              ],
            ),
          ),
        ],
      );
  },
});
