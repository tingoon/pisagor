import { Field, Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import { Sheet } from "..";
export default defineComponent({
  name: "Inset",
  setup() {
    return () =>
      h(Sheet, null, () => [
        h(Sheet.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
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
              h(
                "button",
                { class: outlineButtonClass(), type: "button" },
                "Cancel",
              ),
            ),
            h(Sheet.CloseTrigger, { asChild: true }, () =>
              h(
                "button",
                { class: outlineButtonClass(), type: "button" },
                "Save changes",
              ),
            ),
          ]),
        ]),
      ]);
  },
});
