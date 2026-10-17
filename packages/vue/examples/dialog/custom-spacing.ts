import { Button, Dialog, Field, Input, Select } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "CustomSpacing",
  setup() {
    const branches = [
      { label: "main", value: "main" },
      { label: "develop", value: "develop" },
    ];

    return () =>
      h(Dialog, null, () => [
        h(Dialog.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(
          Dialog.Content,
          {
            class: "[--space:--spacing(4)] sm:[--space:--spacing(8)]",
          } as Record<string, unknown>,
          () => [
            h(Dialog.Header, {
              description: "Make changes to your project settings.",
              title: "Edit project",
            }),
            h(Dialog.Body, null, () =>
              h(Field.Set, null, () =>
                h(Field.Group, null, () => [
                  h(Field, null, () => [
                    h(Field.Label, null, () => "Name"),
                    h(Input, { placeholder: "Your project" }),
                  ]),
                  h(Field, null, () => [
                    h(Field.Label, null, () => "Main branch"),
                    h(Select, {
                      items: branches,
                      placeholder: "Select branch",
                    }),
                  ]),
                ]),
              ),
            ),
            h(Dialog.Footer, null, () => [
              h(Dialog.CloseTrigger, { asChild: true }, () =>
                h(Button, { type: "button", variant: "outline" }, "Cancel"),
              ),
              h(Dialog.CloseTrigger, { asChild: true }, () =>
                h(Button, { type: "button" }, "Save"),
              ),
            ]),
          ],
        ),
      ]);
  },
});
