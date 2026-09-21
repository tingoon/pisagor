import { Button, Dialog, Popover } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const PopoverDialog = defineComponent({
  inheritAttrs: false,
  name: "PopoverDialog",
  setup() {
    const dialogParts = Dialog as unknown as {
      Trigger: ArkPart;
      Content: ArkPart;
      Header: ArkPart;
      Body: ArkPart;
      Footer: ArkPart;
      CloseTrigger: ArkPart;
    };

    const popoverParts = Popover as unknown as {
      Trigger: ArkPart;
      Content: ArkPart;
      Header: ArkPart;
      Body: ArkPart;
    };

    return () =>
      h(Dialog as ArkPart, null, () => [
        h(dialogParts.Trigger, { asChild: true }, () =>
          h(Button as ArkPart, { type: "button", variant: "outline" }, () => "Open dialog"),
        ),
        h(dialogParts.Content, null, () => [
          h(
            dialogParts.Header,
            {
              description:
                "Open the popover from the button below — it stays anchored to its trigger above the dialog.",
              title: "Nested layers",
            },
            () => undefined,
          ),
          h(dialogParts.Body, null, () =>
            h(Popover as ArkPart, null, () => [
              h(popoverParts.Trigger, { asChild: true }, () =>
                h(Button as ArkPart, { type: "button", variant: "outline" }, () => "Open popover"),
              ),
              h(popoverParts.Content, null, () => [
                h(
                  popoverParts.Header,
                  {
                    description: "You're all caught up. Check back later for new notifications.",
                    title: "Notifications",
                  },
                  () => undefined,
                ),
              ]),
            ]),
          ),
          h(dialogParts.Footer, null, () =>
            h(dialogParts.CloseTrigger, { asChild: true }, () =>
              h(Button as ArkPart, { type: "button", variant: "outline" }, () => "Done"),
            ),
          ),
        ]),
      ]);
  },
});
