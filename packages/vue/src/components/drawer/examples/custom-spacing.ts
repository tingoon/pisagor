import { Field, Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { defaultButtonClass, outlineButtonClass } from "../../../internal/story-button";
import { Drawer } from "..";

export default defineComponent({
  name: "CustomSpacing",
  setup() {
    return () =>
      h(Drawer, null, () => [
        h(Drawer.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(
          Drawer.Content,
          { class: "[--bleed:2rem] [--space:--spacing(6)]" } as Record<string, unknown>,
          () => [
            h(Drawer.ContentInner, null, () => [
              h(Drawer.Header, {
                description: "Tighter bleed and larger internal padding than defaults.",
                title: "Custom spacing",
              }),
              h(Drawer.Body, null, () =>
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
            ]),
            h(Drawer.Footer, null, () =>
              h(Drawer.ContentInner, null, () => [
                h(Drawer.CloseTrigger, { asChild: true }, () =>
                  h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
                ),
                h(Drawer.CloseTrigger, { asChild: true }, () =>
                  h("button", { class: defaultButtonClass(), type: "button" }, "Save changes"),
                ),
              ]),
            ),
          ],
        ),
      ]);
  },
});
