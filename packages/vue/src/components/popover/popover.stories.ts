import { buttonVariants } from "@pisagor/styles/ui/button";
import { cn } from "@pisagor/utils";
import { Field } from "@pisagor/vue/field";
import { Input } from "@pisagor/vue/input";
import { Popover } from "@pisagor/vue/popover";
import { h } from "vue";
import preview from "#/vue/preview";
import { outlineButtonClass } from "../../internal/story-button";

type ArkPart = Parameters<typeof h>[0];

const meta = preview.meta({
  component: Popover,
  parameters: {
    docs: {
      description: {
        component:
          "Anchors extra content to a trigger for compact forms, menus, or details without a full modal.",
      },
    },
  },
  subcomponents: {
    Anchor: Popover.Anchor,
    Arrow: Popover.Arrow,
    Body: Popover.Body,
    Close: Popover.Close,
    Content: Popover.Content,
    Description: Popover.Description,
    Footer: Popover.Footer,
    Header: Popover.Header,
    Positioner: Popover.Positioner,
    Title: Popover.Title,
    Trigger: Popover.Trigger,
  },
  title: "Components/Overlay/Popover",
});

export const Default = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Popover, null, () => [
          h(Popover.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Popover.Content, null, () =>
            h("div", { class: "w-80" }, [
              h(Popover.Header, {
                description: "Set the dimensions for the layer.",
                title: "Dimensions",
              }),
              h(Popover.Body, null, () =>
                h("p", { class: "text-muted-foreground text-sm" }, "Popover body content."),
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
        h(Popover, null, () => [
          h(Popover.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(
            Popover.Content as ArkPart,
            { class: "w-80 [--space:--spacing(2)] sm:[--space:--spacing(5)]" },
            () => [
              h(Popover.Header, {
                description: "Set the dimensions for the layer.",
                title: "Dimensions",
              }),
              h(Popover.Body, null, () =>
                h(Field.Group as ArkPart, { class: "gap-2" }, () => [
                  h(Field as ArkPart, { class: "grid grid-cols-3 items-center gap-2" }, () => [
                    h(Field.Label, null, () => "Width"),
                    h(Input as ArkPart, { class: "col-span-2", defaultValue: "100%" }),
                  ]),
                  h(Field as ArkPart, { class: "grid grid-cols-3 items-center gap-2" }, () => [
                    h(Field.Label, null, () => "Max. width"),
                    h(Input as ArkPart, { class: "col-span-2", defaultValue: "300px" }),
                  ]),
                ]),
              ),
            ],
          ),
        ]);
    },
  }),
});

export const Anchor = meta.story({
  render: () => ({
    setup() {
      return () =>
        h("div", null, [
          h(Popover, null, () =>
            h("div", { class: "flex items-center gap-2" }, [
              h(Popover.Trigger, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
              ),
              h(Popover.Anchor, { asChild: true }, () =>
                h(Input as ArkPart, { class: "w-full", placeholder: "jane.doe@example.com" }),
              ),
              h(Popover.Content as ArkPart, { class: "w-56" }, () =>
                h(Popover.Header, {
                  description: "We'll send you a link to reset your password.",
                  title: "Enter your email",
                }),
              ),
            ]),
          ),
        ]);
    },
  }),
});

export const CloseButton = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Popover, null, () => [
          h(Popover.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Popover.Content as ArkPart, { class: "w-72", showCloseButton: true }, () =>
            h(Popover.Header, {
              description: "You're all caught up. Check back later for new notifications.",
              title: "Notifications",
            }),
          ),
        ]);
    },
  }),
});

export const Nested = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Popover, null, () => [
          h(Popover.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Popover.Content, null, () => [
            h(Popover.Header, { description: "Check your notifications.", title: "Notifications" }),
            h(Popover.Body, null, () =>
              h(Popover, null, () => [
                h(Popover.Trigger, { asChild: true }, () =>
                  h(
                    "button",
                    {
                      class: cn(buttonVariants({ size: "sm", variant: "outline" })),
                      type: "button",
                    },
                    "Open nested",
                  ),
                ),
                h(Popover.Content as ArkPart, { class: "w-56" }, () =>
                  h(Popover.Header, {
                    description: "You're all caught up. Check back later for new notifications.",
                    title: "Nested popover",
                  }),
                ),
              ]),
            ),
          ]),
        ]);
    },
  }),
});

export const Modal = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Popover, { modal: true }, () => [
          h(Popover.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Popover.Content, null, () =>
            h(Popover.Header, {
              description: "You're all caught up. Check back later for new notifications.",
              title: "Notifications",
            }),
          ),
        ]);
    },
  }),
});

export const ScrollArea = meta.story({
  render: () => ({
    setup() {
      const items = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        label: `Item ${i + 1}`,
      }));

      return () =>
        h(Popover, null, () => [
          h(Popover.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
          ),
          h(Popover.Content as ArkPart, { class: "h-80 w-72" }, () => [
            h(Popover.Header, { title: "Scrollable content" }),
            h(Popover.Body, null, () =>
              h(
                "ul",
                { class: "flex flex-col gap-1" },
                items.map((item) =>
                  h(
                    "li",
                    { class: "rounded-md px-2 py-1.5 text-sm hover:bg-muted", key: item.id },
                    item.label,
                  ),
                ),
              ),
            ),
            h(Popover.Footer, null, () =>
              h(Popover.Close, { asChild: true }, () =>
                h("button", { class: outlineButtonClass(), type: "button" }, "Close"),
              ),
            ),
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
          h(Popover, { closeOnInteractOutside: false }, () => [
            h(Popover.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Open outside click"),
            ),
            h(Popover.Content, { showCloseButton: true }, () =>
              h(Popover.Header, {
                description: "Clicking outside does not close this popover. Press ESC to close.",
                title: "Stays on outside click",
              }),
            ),
          ]),
          h(Popover, { closeOnEscape: false }, () => [
            h(Popover.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Open escape"),
            ),
            h(Popover.Content, { showCloseButton: true }, () =>
              h(Popover.Header, {
                description: "Pressing escape does not close this popover. Click outside to close.",
                title: "Escape key unavailable",
              }),
            ),
          ]),
        ]);
    },
  }),
});

export const Placements = meta.story({
  render: () => ({
    setup() {
      const placements = ["left", "top", "bottom", "right"] as const;

      return () =>
        h(
          "div",
          { class: "flex flex-wrap justify-center gap-2" },
          placements.map((placement) =>
            h(Popover, { key: placement, positioning: { placement } }, () => [
              h(Popover.Trigger, { asChild: true }, () =>
                h(
                  "button",
                  { class: cn(outlineButtonClass(), "capitalize"), type: "button" },
                  placement,
                ),
              ),
              h(Popover.Content as ArkPart, { class: "w-56" }, () =>
                h(Popover.Header as ArkPart, {
                  description: `This popover appears on the ${placement} placement of the trigger.`,
                  title: "Popover",
                }),
              ),
            ]),
          ),
        );
    },
  }),
});
