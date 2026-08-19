import { buttonVariants } from "@pisagor/styles/ui/button";
import { cn } from "@pisagor/utils";
import { Dialog } from "@pisagor/vue/dialog";
import { Field } from "@pisagor/vue/field";
import { Input } from "@pisagor/vue/input";
import { Select } from "@pisagor/vue/select";
import { h } from "vue";
import preview from "#/vue/preview";
import { outlineButtonClass } from "../../internal/story-button";

const meta = preview.meta({
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          "Focuses attention on a task or decision in a modal layer above the current page.",
      },
    },
  },
  subcomponents: {
    Body: Dialog.Body,
    Close: Dialog.Close,
    Content: Dialog.Content,
    Description: Dialog.Description,
    Footer: Dialog.Footer,
    Header: Dialog.Header,
    Overlay: Dialog.Overlay,
    Positioner: Dialog.Positioner,
    Title: Dialog.Title,
    Trigger: Dialog.Trigger,
  },
  title: "Components/Overlay/Dialog",
});

function ghostButtonClass(className?: string) {
  return cn(buttonVariants({ variant: "ghost" }), className);
}

function defaultButtonClass(className?: string) {
  return cn(buttonVariants(), className);
}

export const Default = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Dialog, null, () => [
          h(Dialog.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Dialog.Content, null, () => [
            h(Dialog.Header, {
              description: "Make changes to your project settings.",
              title: "Edit project",
            }),
            h(Dialog.Body, null, () =>
              h("p", { class: "text-muted-foreground text-sm" }, "Dialog body content."),
            ),
            h(Dialog.Footer, null, () => [
              h(Dialog.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
              ),
              h(Dialog.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Save"),
              ),
            ]),
          ]),
        ]);
    },
  }),
});

export const CustomSpacing = meta.story({
  render: () => ({
    setup() {
      const branches = [
        { label: "main", value: "main" },
        { label: "develop", value: "develop" },
      ];

      return () =>
        h(Dialog, null, () => [
          h(Dialog.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(
            Dialog.Content,
            { class: "[--space:--spacing(4)] sm:[--space:--spacing(8)]" } as Record<
              string,
              unknown
            >,
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
                      h(Select, { items: branches, placeholder: "Select branch" }),
                    ]),
                  ]),
                ),
              ),
              h(Dialog.Footer, null, () => [
                h(Dialog.Close, { asChild: true }, () =>
                  h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
                ),
                h(Dialog.Close, { asChild: true }, () =>
                  h("button", { class: defaultButtonClass(), type: "button" }, "Save"),
                ),
              ]),
            ],
          ),
        ]);
    },
  }),
});

export const InitialFocus = meta.story({
  render: () => ({
    setup() {
      const initialFocusEl = () =>
        document.getElementById("dialog-initial-focus-input") as HTMLElement | null;

      return () =>
        h(Dialog, { initialFocusEl }, () => [
          h(Dialog.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Dialog.Content, null, () => [
            h(Dialog.Header, {
              description: "The first input will be focused when the dialog opens.",
              title: "Edit profile",
            }),
            h(Dialog.Body, null, () =>
              h(Field.Group, null, () => [
                h(Field, null, () => [
                  h(Field.Label, null, () => "Name"),
                  h(Input, { id: "dialog-initial-focus-input", placeholder: "John Doe" }),
                ]),
                h(Field, null, () => [
                  h(Field.Label, null, () => "Email"),
                  h(Input, { placeholder: "john.doe@example.com" }),
                ]),
              ]),
            ),
            h(Dialog.Footer, null, () => [
              h(Dialog.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
              ),
              h(Dialog.Close, { asChild: true }, () =>
                h("button", { class: defaultButtonClass(), type: "button" }, "Save"),
              ),
            ]),
          ]),
        ]);
    },
  }),
});

export const Nested = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Dialog, null, () => [
          h(Dialog.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Dialog.Content, null, () => [
            h(Dialog.Header, {
              description: "View and manage a user in your team.",
              title: "Manage team member",
            }),
            h(Dialog.Body, { class: "grid gap-2" } as Record<string, unknown>, () => [
              h("div", { class: "grid gap-1" }, [
                h("p", { class: "text-muted-foreground text-sm" }, "Name"),
                h("p", { class: "font-medium text-sm" }, "Jane Doe"),
              ]),
              h("div", { class: "grid gap-1" }, [
                h("p", { class: "text-muted-foreground text-sm" }, "Email"),
                h("p", { class: "font-medium text-sm" }, "you@example.com"),
              ]),
            ]),
            h(Dialog.Footer, null, () =>
              h(Dialog, null, () => [
                h(Dialog.Trigger, { asChild: true }, () =>
                  h("button", { class: outlineButtonClass(), type: "button" }, "Edit details"),
                ),
                h(Dialog.Content, { showCloseButton: false }, () => [
                  h(Dialog.Header, null, () => [
                    h(Dialog.Title, null, () => "Edit details"),
                    h(Dialog.Description, null, () => "Make changes to the member's information."),
                  ]),
                  h(Dialog.Body, null, () =>
                    h(Field.Group, null, () => [
                      h(Field, null, () => [
                        h(Field.Label, null, () => "Name"),
                        h(Input, { defaultValue: "Jane Doe", type: "text" }),
                      ]),
                      h(Field, null, () => [
                        h(Field.Label, null, () => "Email"),
                        h(Input, { defaultValue: "you@example.com", type: "text" }),
                      ]),
                    ]),
                  ),
                  h(Dialog.Footer, null, () => [
                    h(Dialog.Close, { asChild: true }, () =>
                      h("button", { class: ghostButtonClass(), type: "button" }, "Cancel"),
                    ),
                    h("button", { class: defaultButtonClass(), type: "submit" }, "Save changes"),
                  ]),
                ]),
              ]),
            ),
          ]),
        ]);
    },
  }),
});

export const NoCloseButton = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Dialog, null, () => [
          h(Dialog.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Dialog.Content, { showCloseButton: false }, () =>
            h(Dialog.Header, {
              description:
                "You can only close this dialog using the buttons in the footer, by pressing Escape or by clicking the backdrop.",
              title: "No close button",
            }),
          ),
        ]);
    },
  }),
});

export const NonModal = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Dialog, { modal: false }, () => [
          h(Dialog.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Dialog.Content, null, () => [
            h(Dialog.Header, {
              description:
                "This is a non-modal dialog. You can interact with elements outside the dialog.",
              title: "Non-modal dialog",
            }),
            h(Dialog.Body, null, () =>
              h(
                "p",
                { class: "text-muted-foreground text-sm" },
                "Non-modal dialogs allow interaction with elements outside the dialog. Focus trapping and scroll prevention are turned off.",
              ),
            ),
            h(Dialog.Footer, null, () =>
              h(Dialog.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Close"),
              ),
            ),
          ]),
        ]);
    },
  }),
});

export const ScrollArea = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Dialog, null, () => [
          h(Dialog.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Dialog.Content, { size: "lg" }, () => [
            h(Dialog.Header, { title: "Terms and conditions" }),
            h(Dialog.Body, { scrollFade: true }, () =>
              h(
                "div",
                {
                  class:
                    "space-y-2 **:[h3]:font-semibold **:[p]:text-muted-foreground **:[p]:text-sm",
                },
                [
                  h("h3", null, "What is Lorem Ipsum?"),
                  h(
                    "p",
                    null,
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet placerat nisl, ac consequat sem hendrerit in.",
                  ),
                  h("h3", null, "Why do we use it?"),
                  h(
                    "p",
                    null,
                    "Pellentesque quis sapien tortor. Nulla egestas tristique justo, in commodo quam posuere id. Cras varius, nunc non placerat vulputate, dolor turpis elementum elit.",
                  ),
                  h("h3", null, "Where does it come from?"),
                  h(
                    "p",
                    null,
                    "Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna. Quisque urna lorem, porttitor ac malesuada at, vehicula eget nulla.",
                  ),
                  h("h3", null, "Where can I get some?"),
                  h(
                    "p",
                    null,
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper eros a maximus. Sed consequat tempus lobortis.",
                  ),
                ],
              ),
            ),
            h(Dialog.Footer, null, () => [
              h(Dialog.Close, { asChild: true }, () =>
                h("button", { class: ghostButtonClass(), type: "button" }, "Cancel"),
              ),
              h(Dialog.Close, { asChild: true }, () =>
                h("button", { class: defaultButtonClass(), type: "button" }, "Agree"),
              ),
            ]),
          ]),
        ]);
    },
  }),
});

export const CloseBehavior = meta.story({
  render: () => ({
    setup() {
      return () =>
        h("div", { class: "flex flex-wrap justify-center gap-2" }, [
          h(Dialog, { closeOnInteractOutside: false }, () => [
            h(Dialog.Trigger, { asChild: true }, () =>
              h(
                "button",
                { class: outlineButtonClass(), type: "button" },
                "No close on outside click",
              ),
            ),
            h(Dialog.Content, { size: "sm" }, () =>
              h(Dialog.Header, {
                description:
                  "Clicking outside does not close this dialog. Press ESC or use the button to close.",
                title: "Stays on outside click",
              }),
            ),
          ]),
          h(Dialog, { closeOnEscape: false }, () => [
            h(Dialog.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "No close on Escape"),
            ),
            h(Dialog.Content, { size: "sm" }, () =>
              h(Dialog.Header, {
                description:
                  "Pressing Escape does not close this dialog. Click outside or use the close button.",
                title: "Escape key unavailable",
              }),
            ),
          ]),
        ]);
    },
  }),
});
