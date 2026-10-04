import { Button, Field, Input, Sheet } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "CustomSpacing",
  setup() {
    return () =>
      h(Sheet, null, () => [
        h(Sheet.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(
          Sheet.Content as ArkPart,
          { class: "[--space:--spacing(4)] sm:[--space:--spacing(8)]" },
          () => [
            h(Sheet.Header, {
              description:
                "Make changes to your account here. Click save when you're done.",
              title: "Edit user",
            }),
            h(Sheet.Body, null, () =>
              h(Field.Group, null, () => [
                h(Field, null, () => [
                  h(Field.Label, null, () => "Name"),
                  h(Input, { defaultValue: "Jane Doe" }),
                ]),
                h(Field, null, () => [
                  h(Field.Label, null, () => "Username"),
                  h(Input, { defaultValue: "@jane.doe" }),
                ]),
              ]),
            ),
            h(Sheet.Footer, null, () => [
              h(Sheet.CloseTrigger, { asChild: true }, () =>
                h(Button, { type: "button", variant: "outline" }, "Cancel"),
              ),
              h(Sheet.CloseTrigger, { asChild: true }, () =>
                h(
                  Button,
                  { type: "button", variant: "outline" },
                  "Save changes",
                ),
              ),
            ]),
          ],
        ),
      ]);
  },
});
