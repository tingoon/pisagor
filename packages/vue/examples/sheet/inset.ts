import { Button, Field, Input, Sheet } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Inset",
  setup() {
    return () =>
      h(Sheet, null, () => [
        h(Sheet.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(Sheet.Content, { variant: "inset" }, () => [
          h(Sheet.Header, {
            description:
              "This sheet uses the inset variant with rounded corners and padding.",
            title: "Inset sheet",
          }),
          h(Sheet.Body, null, () =>
            h(Field.Group, null, () => [
              h(Field, null, () => [
                h(Field.Label, null, () => "Name"),
                h(Input, { defaultValue: "Jane Doe" }),
              ]),
              h(Field, null, () => [
                h(Field.Label, null, () => "Email"),
                h(Input, { defaultValue: "you@example.com" }),
              ]),
            ]),
          ),
          h(Sheet.Footer, null, () => [
            h(Sheet.CloseTrigger, { asChild: true }, () =>
              h(Button, { type: "button", variant: "outline" }, "Cancel"),
            ),
            h(Sheet.CloseTrigger, { asChild: true }, () =>
              h(Button, { type: "button", variant: "outline" }, "Save changes"),
            ),
          ]),
        ]),
      ]);
  },
});
