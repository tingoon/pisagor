import { Button, Dialog } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "ScrollArea",
  setup() {
    return () =>
      h(Dialog, null, () => [
        h(Dialog.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(Dialog.Content, { size: "lg" }, () => [
          h(Dialog.Header, { title: "Terms and conditions" }),
          h(Dialog.Body, { scrollFade: true }, () =>
            h(
              "div",
              {
                class:
                  "space-y-2 **:[h3]:font-semibold **:[p]:text-muted-foreground **:[p]:text-sm",
              },
              [
                h("h3", null, "What is Lorem Ipsum?"),
                h(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet placerat nisl, ac consequat sem hendrerit in.",
                ),
                h("h3", null, "Why do we use it?"),
                h(
                  "p",
                  null,
                  "Pellentesque quis sapien tortor. Nulla egestas tristique justo, in commodo quam posuere id. Cras varius, nunc non placerat vulputate, dolor turpis elementum elit.",
                ),
                h("h3", null, "Where does it come from?"),
                h(
                  "p",
                  null,
                  "Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna. Quisque urna lorem, porttitor ac malesuada at, vehicula eget nulla.",
                ),
                h("h3", null, "Where can I get some?"),
                h(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper eros a maximus. Sed consequat tempus lobortis.",
                ),
              ],
            ),
          ),
          h(Dialog.Footer, null, () => [
            h(Dialog.CloseTrigger, { asChild: true }, () =>
              h(Button, { type: "button", variant: "ghost" }, "Cancel"),
            ),
            h(Dialog.CloseTrigger, { asChild: true }, () =>
              h(Button, { type: "button" }, "Agree"),
            ),
          ]),
        ]),
      ]);
  },
});
