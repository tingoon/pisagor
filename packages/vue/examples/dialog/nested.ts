import { Button, Dialog, Field, Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Nested",
  setup() {
    return () =>
      h(Dialog, null, () => [
        h(Dialog.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(Dialog.Content, null, () => [
          h(Dialog.Header, {
            description: "View and manage a user in your team.",
            title: "Manage team member",
          }),
          h(
            Dialog.Body,
            { class: "grid gap-2" } as Record<string, unknown>,
            () => [
              h("div", { class: "grid gap-1" }, [
                h("p", { class: "text-muted-foreground text-sm" }, "Name"),
                h("p", { class: "font-medium text-sm" }, "Jane Doe"),
              ]),
              h("div", { class: "grid gap-1" }, [
                h("p", { class: "text-muted-foreground text-sm" }, "Email"),
                h("p", { class: "font-medium text-sm" }, "you@example.com"),
              ]),
            ],
          ),
          h(Dialog.Footer, null, () =>
            h(Dialog, null, () => [
              h(Dialog.Trigger, { asChild: true }, () =>
                h(
                  Button,
                  { type: "button", variant: "outline" },
                  "Edit details",
                ),
              ),
              h(Dialog.Content, { showCloseButton: false }, () => [
                h(Dialog.Header, {
                  description: "Make changes to the member's information.",
                  title: "Edit details",
                }),
                h(Dialog.Body, null, () =>
                  h(Field.Group, null, () => [
                    h(Field, null, () => [
                      h(Field.Label, null, () => "Name"),
                      h(Input, { defaultValue: "Jane Doe", type: "text" }),
                    ]),
                    h(Field, null, () => [
                      h(Field.Label, null, () => "Email"),
                      h(Input, {
                        defaultValue: "you@example.com",
                        type: "text",
                      }),
                    ]),
                  ]),
                ),
                h(Dialog.Footer, null, () => [
                  h(Dialog.CloseTrigger, { asChild: true }, () =>
                    h(Button, { type: "button", variant: "ghost" }, "Cancel"),
                  ),
                  h(Button, { type: "submit" }, "Save changes"),
                ]),
              ]),
            ]),
          ),
        ]),
      ]);
  },
});
