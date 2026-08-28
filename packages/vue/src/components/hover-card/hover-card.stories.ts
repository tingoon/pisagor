import { PhMapPin } from "@phosphor-icons/vue";
import { buttonVariants } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import { Avatar, Button, HoverCard } from "@pisagor/vue";
import { h, ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: HoverCard,
  parameters: {
    docs: {
      description: {
        component:
          "Reveals richer preview content when the user pauses over a trigger, without opening a full overlay.",
      },
    },
    metadata: {
      aliases: ["popover-card"],
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Arrow: HoverCard.Arrow,
    Content: HoverCard.Content,
    Trigger: HoverCard.Trigger,
  },
  title: "Components/Overlay/Hover Card",
});

export const Default = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(HoverCard, null, () => [
          h(HoverCard.Trigger, { asChild: true }, () =>
            h(
              "button",
              { class: cn(buttonVariants({ variant: "link" }), "underline"), type: "button" },
              "Hover here",
            ),
          ),
          h(HoverCard.Content, null, () =>
            h("div", { class: "flex flex-col gap-2" }, [
              h("span", { class: "font-medium text-sm" }, "Jane Doe"),
              h(
                "p",
                { class: "text-muted-foreground text-sm" },
                "Software engineer at Example Co.",
              ),
            ]),
          ),
        ]);
    },
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Button, HoverCard },
    template: `
      <HoverCard disabled>
        <HoverCard.Trigger as-child>
          <Button variant="link">Hover here</Button>
        </HoverCard.Trigger>
        <HoverCard.Content>IT WILL NOT OPEN</HoverCard.Content>
      </HoverCard>
    `,
  }),
});

export const TriggersDelays = meta.story({
  render: () => ({
    components: { Avatar, Button, HoverCard, PhMapPin },
    template: `
      <HoverCard :close-delay="300" :open-delay="200">
        <HoverCard.Trigger as-child>
          <Button variant="link">Hover here</Button>
        </HoverCard.Trigger>
        <HoverCard.Content>
          <div class="flex gap-2">
            <Avatar fallback="JD" />
            <div class="flex flex-col gap-2">
              <a
                class="font-medium text-sm underline underline-offset-4"
                href="https://example.com/profile/jane.doe"
                rel="noopener"
                target="_blank"
              >
                @jane.doe
              </a>
              <p class="text-muted-foreground text-sm">Frontend Developer</p>
              <p class="flex items-center gap-1 text-muted-foreground text-xs">
                <PhMapPin class="size-4" />
                Joined in 2016
              </p>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Button, HoverCard },
    setup() {
      const open = ref(false);
      const onOpenChange = (details: { open: boolean }) => {
        open.value = details.open;
      };
      return { onOpenChange, open };
    },
    template: `
      <div class="flex flex-col gap-2">
        <HoverCard :onOpenChange="onOpenChange" :open="open">
          <HoverCard.Trigger as-child>
            <Button variant="outline">Hover here</Button>
          </HoverCard.Trigger>
          <HoverCard.Content>
            <div class="flex flex-col gap-1">
              <h4 class="font-medium">Controlled</h4>
              <p class="text-muted-foreground text-sm">
                The open state is managed externally with <code>open</code> and
                <code>onOpenChange</code>.
              </p>
            </div>
          </HoverCard.Content>
        </HoverCard>
        <p class="text-center text-muted-foreground text-sm">{{ open ? "✅" : "❌" }}</p>
      </div>
    `,
  }),
});

export const Placements = meta.story({
  render: () => ({
    components: { Button, HoverCard },
    setup() {
      const placements = ["left", "top", "bottom", "right"] as const;
      return { placements };
    },
    template: `
      <div class="flex flex-wrap justify-center gap-2">
        <HoverCard v-for="placement in placements" :key="placement" :positioning="{ placement }">
          <HoverCard.Trigger as-child>
            <Button class="capitalize" variant="outline">
              {{ placement }}
            </Button>
          </HoverCard.Trigger>
          <HoverCard.Content class="flex flex-col gap-1">
            <h4 class="font-medium">Hover Card</h4>
            <p class="text-muted-foreground text-sm">
              This hover card appears on the {{ placement }} placement of the trigger.
            </p>
          </HoverCard.Content>
        </HoverCard>
      </div>
    `,
  }),
});
