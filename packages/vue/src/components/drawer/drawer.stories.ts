import { buttonVariants } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import { Drawer, Field, Input } from "@pisagor/vue";
import { h } from "vue";
import preview from "#/storybook/preview";
import { outlineButtonClass } from "../../internal/story-button";

function defaultButtonClass(className?: string) {
  return cn(buttonVariants(), className);
}

const meta = preview.meta({
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component:
          "Slides a panel over the page for secondary tasks or details without leaving the current context.",
      },
    },
    metadata: {
      aliases: ["tray"],
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Backdrop: Drawer.Backdrop,
    Body: Drawer.Body,
    CloseTrigger: Drawer.CloseTrigger,
    Content: Drawer.Content,
    ContentInner: Drawer.ContentInner,
    Description: Drawer.Description,
    Footer: Drawer.Footer,
    Grabber: Drawer.Grabber,
    Header: Drawer.Header,
    Positioner: Drawer.Positioner,
    Title: Drawer.Title,
    Trigger: Drawer.Trigger,
  },
  title: "Components/Overlay/Drawer",
});

export const Default = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Drawer, null, () => [
          h(Drawer.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Drawer.Content, null, () =>
            h(Drawer.ContentInner, null, () => [
              h(Drawer.Header, {
                description: "Make changes to your account here. Swipe down to close.",
                title: "Edit profile",
              }),
              h(Drawer.Body, null, () =>
                h("p", { class: "text-muted-foreground text-sm" }, "Drawer body content."),
              ),
              h(Drawer.Footer, null, () =>
                h(Drawer.CloseTrigger, { asChild: true }, () =>
                  h("button", { class: outlineButtonClass(), type: "button" }, "Save"),
                ),
              ),
            ]),
          ),
        ]);
    },
  }),
});

export const CustomSpacing = meta.story({
  render: () => ({
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
  }),
});

export const DrawerContentInner = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Drawer, { swipeDirection: "down" }, () => [
          h(Drawer.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open drawer"),
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
  }),
});

export const Inset = meta.story({
  render: () => ({
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
  }),
});

export const SnapPoints = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(
          Drawer,
          { defaultSnapPoint: 0.5, snapPoints: [0.25, 0.5, 1], snapToSequentialPoints: true },
          () => [
            h(Drawer.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
            ),
            h(Drawer.Content, null, () =>
              h(Drawer.ContentInner, null, () => [
                h(Drawer.Header, {
                  description: "Drag to 25%, 50%, or 100% height. Swipe down to close.",
                  title: "Snap points",
                }),
                h(Drawer.Body, null, () =>
                  h(
                    "p",
                    { class: "text-muted-foreground text-sm" },
                    "This drawer has multiple snap points. Try dragging the handle to quarter, half, or full height.",
                  ),
                ),
              ]),
            ),
          ],
        );
    },
  }),
});

export const SwipeDirections = meta.story({
  render: () => ({
    setup() {
      return () =>
        h("div", { class: "flex flex-wrap justify-center gap-2" }, [
          h(Drawer, { swipeDirection: "down" }, () => [
            h(Drawer.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Bottom"),
            ),
            h(Drawer.Content, null, () => [
              h(Drawer.Header, { title: "Bottom drawer" }),
              h(Drawer.Body, null, () =>
                h(
                  "p",
                  { class: "text-muted-foreground text-sm" },
                  "Swipe down to close this drawer.",
                ),
              ),
            ]),
          ]),
          h(Drawer, { swipeDirection: "up" }, () => [
            h(Drawer.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Top"),
            ),
            h(Drawer.Content, null, () => [
              h(Drawer.Header, { title: "Top drawer" }),
              h(Drawer.Body, null, () =>
                h(
                  "p",
                  { class: "text-muted-foreground text-sm" },
                  "Swipe up to close this drawer.",
                ),
              ),
            ]),
          ]),
          h(Drawer, { swipeDirection: "start" }, () => [
            h(Drawer.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Left"),
            ),
            h(Drawer.Content, null, () => [
              h(Drawer.Header, { title: "Start drawer" }),
              h(Drawer.Body, null, () =>
                h(
                  "p",
                  { class: "text-muted-foreground text-sm" },
                  "Swipe left to close this drawer.",
                ),
              ),
            ]),
          ]),
          h(Drawer, { swipeDirection: "end" }, () => [
            h(Drawer.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Right"),
            ),
            h(Drawer.Content, null, () => [
              h(Drawer.Header, { title: "End drawer" }),
              h(Drawer.Body, null, () =>
                h(
                  "p",
                  { class: "text-muted-foreground text-sm" },
                  "Swipe right to close this drawer.",
                ),
              ),
            ]),
          ]),
        ]);
    },
  }),
});
