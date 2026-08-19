import { PhGear, PhInfo, PhUser } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue/button";
import { Dialog } from "@pisagor/vue/dialog";
import { DropdownMenu } from "@pisagor/vue/dropdown-menu";
import { defineComponent, h, ref } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const MenuDialog = defineComponent({
  inheritAttrs: false,
  name: "MenuDialog",
  setup() {
    const isOpen = ref(false);
    const dropdownMenuParts = DropdownMenu as unknown as {
      Trigger: ArkPart;
      Content: ArkPart;
      Item: ArkPart;
    };
    const dialogParts = Dialog as unknown as {
      Content: ArkPart;
      Header: ArkPart;
      Body: ArkPart;
      Footer: ArkPart;
      Close: ArkPart;
    };

    const setOpen = (next: boolean) => {
      isOpen.value = next;
    };

    return () =>
      h("div", null, () => [
        h(DropdownMenu as ArkPart, null, () => [
          h(dropdownMenuParts.Trigger, { asChild: true }, () =>
            h(Button as ArkPart, { type: "button", variant: "outline" }, () => "Open"),
          ),
          h(dropdownMenuParts.Content, null, () => [
            h(
              dropdownMenuParts.Item,
              {
                onSelect: () => setOpen(true),
                value: "settings",
              },
              () => [h(PhGear, { "aria-hidden": true }), "Open settings"],
            ),
            h(dropdownMenuParts.Item, { disabled: true, value: "profile" }, () => [
              h(PhUser, { "aria-hidden": true }),
              "View profile",
            ]),
            h(dropdownMenuParts.Item, { disabled: true, value: "help" }, () => [
              h(PhInfo, { "aria-hidden": true }),
              "Help",
            ]),
          ]),
        ]),
        h(
          Dialog as ArkPart,
          {
            onOpenChange: (details: { open?: boolean } | boolean) =>
              setOpen(Boolean(typeof details === "boolean" ? details : details?.open)),
            open: isOpen.value,
          },
          () => [
            h(dialogParts.Content, null, () => [
              h(
                dialogParts.Header,
                { description: "This dialog was opened from a menu item", title: "Settings" },
                () => undefined,
              ),
              h(dialogParts.Body, null, () =>
                h(
                  "p",
                  { class: "text-muted-foreground text-sm" },
                  "You can open dialogs imperatively from menu items using the onSelect handler.",
                ),
              ),
              h(dialogParts.Footer, null, () => [
                h(dialogParts.Close, { asChild: true }, () =>
                  h(Button as ArkPart, { type: "button", variant: "outline" }, () => "Cancel"),
                ),
                h(dialogParts.Close, { asChild: true }, () =>
                  h(Button as ArkPart, { type: "button" }, () => "Save"),
                ),
              ]),
            ]),
          ],
        ),
      ]);
  },
});
