import { Button } from "@pisagor/vue/button";
import { Dialog } from "@pisagor/vue/dialog";
import { Popover } from "@pisagor/vue/popover";
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
      Close: ArkPart;
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
          h(Button as ArkPart, { type: "button", variant: "outline" }, () => "Open"),
        ),
        h(dialogParts.Content, null, () => [
          h(
            dialogParts.Header,
            {
              description:
                "Open the popover from the button below to see it layered above the dialog.",
              title: "Popover inside dialog",
            },
            () => undefined,
          ),
          h(dialogParts.Body, null, () =>
            h(Popover as ArkPart, null, () => [
              h(popoverParts.Trigger, { asChild: true }, () =>
                h(Button as ArkPart, { type: "button", variant: "outline" }, () => "Open"),
              ),
              h(popoverParts.Content, null, () => [
                h(
                  popoverParts.Header,
                  {
                    description: "You're all caught up. Check back later for new notifications.",
                    title: "Nested popover",
                  },
                  () => undefined,
                ),
              ]),
            ]),
          ),
          h(dialogParts.Footer, null, () =>
            h(dialogParts.Close, { asChild: true }, () =>
              h(Button as ArkPart, { type: "button", variant: "outline" }, () => "Close"),
            ),
          ),
        ]),
      ]);
  },
});
