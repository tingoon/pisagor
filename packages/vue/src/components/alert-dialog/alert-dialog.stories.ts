import { AlertDialog } from "@pisagor/vue";
import { h } from "vue";
import preview from "#/storybook/preview";
import { outlineButtonClass } from "../../internal/story-button";

const meta = preview.meta({
  component: AlertDialog,
  parameters: {
    docs: {
      description: {
        component:
          "Interrupts the user with a focused confirmation before a destructive or irreversible action proceeds.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Action: AlertDialog.Action,
    Body: AlertDialog.Body,
    Cancel: AlertDialog.Cancel,
    Close: AlertDialog.Close,
    Content: AlertDialog.Content,
    Description: AlertDialog.Description,
    Footer: AlertDialog.Footer,
    Header: AlertDialog.Header,
    Title: AlertDialog.Title,
    Trigger: AlertDialog.Trigger,
  },
  title: "Components/Overlay/Alert Dialog",
});

export const Default = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(AlertDialog, null, () => [
          h(AlertDialog.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(AlertDialog.Content, null, () => [
            h(AlertDialog.Header, {
              description: "Do you want to allow the USB accessory to connect to this device?",
              title: "Allow accessory to connect?",
            }),
            h(AlertDialog.Footer, null, () => [
              h(AlertDialog.Cancel, null, () => "Don't allow"),
              h(AlertDialog.Close, { asChild: true }, () =>
                h(AlertDialog.Action, null, () => "Allow"),
              ),
            ]),
          ]),
        ]);
    },
  }),
});

export const Variants = meta.story({
  render: () => ({
    setup() {
      return () =>
        h("div", { class: "flex flex-wrap gap-2" }, [
          h(AlertDialog, null, () => [
            h(AlertDialog.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Default"),
            ),
            h(AlertDialog.Content, null, () => [
              h(AlertDialog.Header, {
                description: "Do you want to allow the USB accessory to connect to this device?",
                title: "Allow accessory to connect?",
              }),
              h(AlertDialog.Footer, null, () => [
                h(AlertDialog.Cancel, null, () => "Don't allow"),
                h(AlertDialog.Close, { asChild: true }, () =>
                  h(AlertDialog.Action, { variant: "default" }, () => "Allow"),
                ),
              ]),
            ]),
          ]),
          h(AlertDialog, null, () => [
            h(AlertDialog.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Destructive"),
            ),
            h(AlertDialog.Content, null, () => [
              h(AlertDialog.Header, {
                description:
                  "This action cannot be undone. This will permanently delete the project and remove all data.",
                title: "Delete project",
              }),
              h(AlertDialog.Footer, null, () => [
                h(AlertDialog.Cancel, null, () => "Cancel"),
                h(AlertDialog.Close, { asChild: true }, () =>
                  h(AlertDialog.Action, { variant: "destructive" }, () => "Delete project"),
                ),
              ]),
            ]),
          ]),
        ]);
    },
  }),
});
