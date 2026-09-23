import { Field, Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import type { ArkPart } from "../../../internal/types";
import { Sheet } from "..";
export default defineComponent({
  name: "CustomSpacing",
  setup() {
    return () =>
      h(Sheet, null, () => [
        h(Sheet.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(
          Sheet.Content as ArkPart,
          { class: "[--space:--spacing(4)] sm:[--space:--spacing(8)]" },
          () => [
            h(Sheet.Header, {
              description: "Make changes to your account here. Click save when you're done.",
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
                h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
              ),
              h(Sheet.CloseTrigger, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Save changes"),
              ),
            ]),
          ],
        ),
      ]);
  },
});
