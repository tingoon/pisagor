import { PhTextB } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue/button";
import { Kbd } from "@pisagor/vue/kbd";
import { Tooltip } from "@pisagor/vue/tooltip";
import { Fragment, h } from "vue";
import preview from "#/vue/preview";

type ArkPart = Parameters<typeof h>[0];

const meta = preview.meta({
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          "Explains a control or label on hover or focus with a short message that does not block interaction.",
      },
    },
  },
  title: "Components/Overlay/Tooltip",
});

export const Default = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(
          Tooltip as ArkPart,
          {
            children: h(Button as ArkPart, { size: "icon-md", variant: "outline" }, () =>
              h(PhTextB),
            ),
            content: "Bold",
          },
          () => undefined,
        );
    },
  }),
});

export const Disabled = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(
          Tooltip as ArkPart,
          {
            children: (triggerProps: Record<string, unknown>) =>
              h(
                "span",
                triggerProps,
                h(Button as ArkPart, { disabled: true, variant: "outline" }, () => "Unavailable"),
              ),
            content: h("p", null, "You can still show a tooltip on an unavailable element"),
          },
          () => undefined,
        );
    },
  }),
});

export const WithKeyboardShortcut = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(
          Tooltip as ArkPart,
          {
            children: h(Button as ArkPart, { variant: "outline" }, () => "Add to library"),
            classNames: { content: "flex items-center gap-2" },
            content: h(Fragment, null, [
              h("p", null, "Add to library"),
              h(Kbd.Group as ArkPart, { class: "ml-1.5 inline" }, () => [
                h(Kbd as ArkPart, null, () => "⌘"),
                h(Kbd as ArkPart, null, () => "K"),
              ]),
            ]),
          },
          () => undefined,
        );
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
          { class: "flex flex-wrap items-center justify-center gap-2" },
          placements.map((placement) =>
            h(
              Tooltip as ArkPart,
              {
                children: h(
                  Button as ArkPart,
                  { class: "capitalize", variant: "outline" },
                  () => placement,
                ),
                content: h("p", null, "Add to library"),
                key: placement,
                positioning: { placement },
              },
              () => undefined,
            ),
          ),
        );
    },
  }),
});
