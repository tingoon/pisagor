import { Field, Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { defaultButtonClass, outlineButtonClass } from "../../../internal/story-button";
import { Drawer } from "..";

export default defineComponent({
  name: "Inset",
  setup() {
    return () =>
      h(Drawer, null, () => [
        h(Drawer.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(Drawer.Content, { variant: "inset" }, () => [
          h(Drawer.ContentInner, null, () => [
            h(Drawer.Header, {
              description:
                "On larger screens, the drawer appears with rounded corners and padding.",
              title: "Inset drawer",
            }),
            h(Drawer.Body, null, () =>
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
          ]),
          h(Drawer.Footer, null, () =>
            h(Drawer.ContentInner, null, () => [
              h(Drawer.CloseTrigger, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
              ),
              h(Drawer.CloseTrigger, { asChild: true }, () =>
                h("button", { class: defaultButtonClass(), type: "button" }, "Save"),
              ),
            ]),
          ),
        ]),
      ]);
  },
});
