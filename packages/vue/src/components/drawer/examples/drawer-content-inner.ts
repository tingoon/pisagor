import { Field, Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import {
  defaultButtonClass,
  outlineButtonClass,
} from "../../../internal/story-button";
import { Drawer } from "..";

export default defineComponent({
  name: "DrawerContentInner",
  setup() {
    return () =>
      h(Drawer, { swipeDirection: "down" }, () => [
        h(Drawer.Trigger, { asChild: true }, () =>
          h(
            "button",
            { class: outlineButtonClass(), type: "button" },
            "Open drawer",
          ),
        ),
        h(Drawer.Content, null, () => [
          h(Drawer.ContentInner, null, () => [
            h(Drawer.Header, {
              description:
                "Constrains width to max-w-sm and centers content. Use it to wrap the main body or footer actions.",
              title: "Container",
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
                h(
                  "button",
                  { class: outlineButtonClass(), type: "button" },
                  "Cancel",
                ),
              ),
              h(Drawer.CloseTrigger, { asChild: true }, () =>
                h(
                  "button",
                  { class: defaultButtonClass(), type: "button" },
                  "Save",
                ),
              ),
            ]),
          ),
        ]),
      ]);
  },
});
