import { Field } from "@pisagor/vue/field";
import { Input } from "@pisagor/vue/input";
import { Sheet } from "@pisagor/vue/sheet";
import { h } from "vue";
import preview from "#/vue/preview";
import { outlineButtonClass } from "../../internal/story-button";

type ArkPart = Parameters<typeof h>[0];

const meta = preview.meta({
  component: Sheet,
  parameters: {
    docs: {
      description: {
        component:
          "Slides a panel in from the edge of the screen for secondary tasks on mobile and desktop.",
      },
    },
  },
  subcomponents: {
    Body: Sheet.Body,
    Close: Sheet.Close,
    Content: Sheet.Content,
    Description: Sheet.Description,
    Footer: Sheet.Footer,
    Header: Sheet.Header,
    Overlay: Sheet.Overlay,
    Positioner: Sheet.Positioner,
    Title: Sheet.Title,
    Trigger: Sheet.Trigger,
  },
  title: "Components/Overlay/Sheet",
});

export const Default = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Sheet, null, () => [
          h(Sheet.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Sheet.Content, null, () => [
            h(Sheet.Header, {
              description: "Make changes to your account here. Click save when you're done.",
              title: "Edit user",
            }),
            h(Sheet.Body, null, () =>
              h("p", { class: "text-muted-foreground text-sm" }, "Sheet body content."),
            ),
            h(Sheet.Footer, null, () =>
              h(Sheet.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Save changes"),
              ),
            ),
          ]),
        ]);
    },
  }),
});

export const CustomSpacing = meta.story({
  render: () => ({
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
              h(Sheet.Body, null, () => editUserFields()),
              h(Sheet.Footer, null, () => [
                h(Sheet.Close, { asChild: true }, () =>
                  h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
                ),
                h(Sheet.Close, { asChild: true }, () =>
                  h("button", { class: outlineButtonClass(), type: "button" }, "Save changes"),
                ),
              ]),
            ],
          ),
        ]);
    },
  }),
});

export const Inset = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Sheet, null, () => [
          h(Sheet.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Sheet.Content, { variant: "inset" }, () => [
            h(Sheet.Header, {
              description: "This sheet uses the inset variant with rounded corners and padding.",
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
              h(Sheet.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
              ),
              h(Sheet.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Save changes"),
              ),
            ]),
          ]),
        ]);
    },
  }),
});

export const NoCloseButton = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Sheet, null, () => [
          h(Sheet.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Sheet.Content, { showCloseButton: false }, () => [
            h(Sheet.Header, {
              description:
                "You can only close this sheet using the buttons in the footer, by pressing Escape or by clicking the backdrop.",
              title: "No close button",
            }),
            h(Sheet.Body, null, () =>
              h(
                "p",
                { class: "text-muted-foreground text-sm" },
                "The close button in the top right corner is hidden. Use the footer buttons or press Escape to close.",
              ),
            ),
            h(Sheet.Footer, null, () => [
              h(Sheet.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
              ),
              h(Sheet.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Confirm"),
              ),
            ]),
          ]),
        ]);
    },
  }),
});

export const NonModal = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Sheet, { modal: false }, () => [
          h(Sheet.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Sheet.Content, null, () => [
            h(Sheet.Header, {
              description:
                "This is a non-modal sheet. You can interact with elements outside the sheet.",
              title: "Non-modal sheet",
            }),
            h(Sheet.Body, null, () =>
              h(
                "p",
                { class: "text-muted-foreground text-sm" },
                "Non-modal sheets allow interaction with elements outside. Focus trapping and scroll prevention are turned off.",
              ),
            ),
            h(Sheet.Footer, null, () =>
              h(Sheet.Close, { asChild: true }, () =>
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
        h(Sheet, null, () => [
          h(Sheet.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Sheet.Content, null, () => [
            h(Sheet.Header, { title: "Terms and conditions" }),
            h(Sheet.Body, { scrollFade: true }, () =>
              h(
                "div",
                {
                  class:
                    "space-y-2 **:[h3]:font-semibold **:[p]:text-muted-foreground **:[p]:text-sm",
                },
                termsSections.flatMap((section) => [
                  h("h3", null, section.heading),
                  h("p", null, section.body),
                ]),
              ),
            ),
            h(Sheet.Footer, null, () => [
              h(Sheet.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
              ),
              h(Sheet.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Agree"),
              ),
            ]),
          ]),
        ]);
    },
  }),
});

export const Sides = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(
          "div",
          { class: "flex flex-wrap justify-center gap-2" },
          sidePlacements.map((side) =>
            h(Sheet, { key: side.placement }, () => [
              h(Sheet.Trigger, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, side.label),
              ),
              h(Sheet.Content, { placement: side.placement }, () => [
                h(Sheet.Header, { title: `${side.label} placement sheet` }),
                h(Sheet.Body, null, () =>
                  h("p", { class: "text-muted-foreground text-sm" }, side.body),
                ),
              ]),
            ]),
          ),
        );
    },
  }),
});

export const CloseBehavior = meta.story({
  render: () => ({
    setup() {
      return () =>
        h("div", { class: "flex flex-wrap justify-center gap-2" }, [
          h(Sheet, { closeOnInteractOutside: false }, () => [
            h(Sheet.Trigger, { asChild: true }, () =>
              h(
                "button",
                { class: outlineButtonClass(), type: "button" },
                "No close on outside click",
              ),
            ),
            h(Sheet.Content, null, () =>
              h(Sheet.Header, {
                description:
                  "Clicking outside does not close this sheet. Press ESC or use the close button.",
                title: "Stays on outside click",
              }),
            ),
          ]),
          h(Sheet, { closeOnEscape: false }, () => [
            h(Sheet.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "No close on Escape"),
            ),
            h(Sheet.Content, null, () =>
              h(Sheet.Header, {
                description:
                  "Pressing Escape does not close this sheet. Click outside or use the close button.",
                title: "Escape key unavailable",
              }),
            ),
          ]),
        ]);
    },
  }),
});

function editUserFields() {
  return h(Field.Group, null, () => [
    h(Field, null, () => [
      h(Field.Label, null, () => "Name"),
      h(Input, { defaultValue: "Jane Doe" }),
    ]),
    h(Field, null, () => [
      h(Field.Label, null, () => "Username"),
      h(Input, { defaultValue: "@jane.doe" }),
    ]),
  ]);
}

const sidePlacements = [
  {
    body: "This sheet slides in from the right placement.",
    label: "Right",
    placement: "right" as const,
  },
  {
    body: "This sheet slides in from the left placement.",
    label: "Left",
    placement: "left" as const,
  },
  { body: "This sheet slides in from the top placement.", label: "Top", placement: "top" as const },
  { body: "This sheet slides in from the bottom.", label: "Bottom", placement: "bottom" as const },
];

const termsSections = [
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet placerat nisl, ac consequat sem hendrerit in.",
    heading: "What is Lorem Ipsum?",
  },
  {
    body: "Pellentesque quis sapien tortor. Nulla egestas tristique justo, in commodo quam posuere id. Cras varius, nunc non placerat vulputate, dolor turpis elementum elit, non lobortis lacus nunc nec nisl.",
    heading: "Why do we use it?",
  },
  {
    body: "Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna. Pellentesque pellentesque est euismod accumsan ullamcorper. Quisque urna lorem, porttitor ac malesuada at, vehicula eget nulla. Donec eget consequat erat, quis pharetra ex.",
    heading: "Where does it come from?",
  },
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper eros a maximus. Sed consequat tempus lobortis. Phasellus sed vulputate turpis. Nulla facilisi. Curabitur consequat dui tellus.",
    heading: "Where can I get some?",
  },
  {
    body: "Donec tortor lorem, finibus vel suscipit vehicula, sagittis efficitur erat. Proin sagittis aliquam sagittis. Nullam sed porta leo. Nunc sed velit felis.",
    heading: "Who can I contact if I have questions?",
  },
  {
    body: "Aenean maximus, libero vel laoreet congue, purus leo iaculis libero, egestas egestas quam mi at quam. Curabitur eu tempus mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    heading: "What happens if I don't agree to these terms?",
  },
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper eros a maximus. Sed consequat tempus lobortis. Phasellus sed vulputate turpis. Nulla facilisi. Curabitur consequat dui tellus.",
    heading: "Where can I get some?",
  },
];
