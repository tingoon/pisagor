import { PhCopy, PhDotsThree, PhFile, PhFolder } from "@phosphor-icons/vue";
import { DropdownMenu } from "@pisagor/vue/dropdown-menu";
import { InputGroup } from "@pisagor/vue/input-group";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const InputGroupWithMenu = defineComponent({
  inheritAttrs: false,
  name: "InputGroupWithMenu",
  setup() {
    const dropdownMenuParts = DropdownMenu as unknown as {
      Trigger: ArkPart;
      Content: ArkPart;
      Item: ArkPart;
    };

    return () =>
      h(InputGroup as ArkPart, null, () => [
        h(InputGroup.Input as ArkPart, { placeholder: "Select file..." }),
        h(InputGroup.Addon as ArkPart, { align: "inline-end" }, () =>
          h(DropdownMenu as ArkPart, null, () => [
            h(dropdownMenuParts.Trigger, { asChild: true }, () =>
              h(
                InputGroup.Button as ArkPart,
                { "aria-label": "Open menu", size: "icon-xs", type: "button", variant: "ghost" },
                () => h(PhDotsThree, { "aria-hidden": true }),
              ),
            ),
            h(dropdownMenuParts.Content, { class: "w-48" }, () => [
              h(dropdownMenuParts.Item, { value: "file" }, () => [
                h(PhFile, { "aria-hidden": true }),
                "Select file",
              ]),
              h(dropdownMenuParts.Item, { value: "folder" }, () => [
                h(PhFolder, { "aria-hidden": true }),
                "Select folder",
              ]),
              h(dropdownMenuParts.Item, { value: "copy-path" }, () => [
                h(PhCopy, { "aria-hidden": true }),
                "Copy path",
              ]),
            ]),
          ]),
        ),
      ]);
  },
});
