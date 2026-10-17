import { Button, Drawer, Field, Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "DrawerContentInner",
  setup() {
    return () =>
      h(Drawer, { swipeDirection: "down" }, () => [
        h(Drawer.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open drawer"),
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
                h(Button, { type: "button", variant: "outline" }, "Cancel"),
              ),
              h(Drawer.CloseTrigger, { asChild: true }, () =>
                h(Button, { type: "button" }, "Save"),
              ),
            ]),
          ),
        ]),
      ]);
  },
});
