import { PhFloppyDisk } from "@phosphor-icons/vue";
import { Button, Kbd, Tooltip } from "@pisagor/vue";
import { h } from "vue";
import preview from "#/vue/preview";

type ArkPart = Parameters<typeof h>[0];

const meta = preview.meta({
  component: Kbd,
  parameters: {
    docs: {
      description: {
        component:
          "Displays keyboard shortcuts in a monospace badge so users know which keys to press.",
      },
    },
  },
  subcomponents: {
    Group: Kbd.Group,
  },
  title: "Components/Data Display/Kbd",
});

export const Default = meta.story({
  render: () => ({
    components: { Kbd },
    template: "<Kbd>K</Kbd>",
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Kbd },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Kbd variant="default">K</Kbd>
        <Kbd.Group>
          <Kbd variant="outline">K</Kbd>
          <Kbd variant="outline">⌘</Kbd>
          <Kbd variant="outline">⌃</Kbd>
        </Kbd.Group>
      </div>
    `,
  }),
});

export const WithButton = meta.story({
  render: () => ({
    components: { Button, Kbd, PhFloppyDisk },
    template: `
      <Button variant="outline">
        <PhFloppyDisk />
        Save
        <Kbd.Group class="translate-x-0.5">
          <Kbd variant="outline">Ctrl+S</Kbd>
        </Kbd.Group>
      </Button>
    `,
  }),
});

export const KbdGroupStory = meta.story({
  name: "KbdGroup",
  render: () => ({
    components: { Kbd },
    template: `
      <div class="text-muted-foreground text-sm">
        Use
        <Kbd.Group>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>K</Kbd>
        </Kbd.Group>
        to open the command palette
      </div>
    `,
  }),
});

export const WithTooltip = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Tooltip as ArkPart, {
          children: h(Button as ArkPart, { size: "sm", variant: "outline" }, () => "Dark mode"),
          classNames: { content: "flex items-center gap-2" },
          content: [
            "Toggle mode",
            h(Kbd.Group as ArkPart, { class: "ml-1.5 inline" }, () =>
              h(Kbd as ArkPart, null, () => "D"),
            ),
          ],
        });
    },
  }),
});
