import { Separator } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: "Visually divides sections of content so grouped information is easier to scan.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Layout/Separator",
});

export const Default = meta.story({
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex flex-col gap-2 text-sm">
        <div class="flex flex-col gap-1">
          <h4 class="font-medium leading-none">Acme UI</h4>
          <p class="text-muted-foreground">A set of primitive components for building UI.</p>
        </div>
        <Separator />
        <div>A collection of accessible, beautiful, and customizable components.</div>
      </div>
    `,
  }),
});

export const List = meta.story({
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex flex-col gap-2 text-sm">
        <dl class="flex items-center justify-between">
          <dt>Item 1</dt>
          <dd class="text-muted-foreground">Value 1</dd>
        </dl>
        <Separator />
        <dl class="flex items-center justify-between">
          <dt>Item 2</dt>
          <dd class="text-muted-foreground">Value 2</dd>
        </dl>
        <Separator />
        <dl class="flex items-center justify-between">
          <dt>Item 3</dt>
          <dd class="text-muted-foreground">Value 3</dd>
        </dl>
      </div>
    `,
  }),
});

export const InlineNavigation = meta.story({
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex h-5 items-center gap-2 text-sm *:[div]:space-y-1">
        <div>
          <p class="font-medium leading-none">Blog</p>
          <p class="text-muted-foreground text-xs">Latest posts</p>
        </div>
        <Separator orientation="vertical" />
        <div>
          <p class="font-medium leading-none">Docs</p>
          <p class="text-muted-foreground text-xs">API references</p>
        </div>
        <Separator orientation="vertical" />
        <div>
          <p class="font-medium leading-none">Source</p>
          <p class="text-muted-foreground text-xs">View on GitHub</p>
        </div>
      </div>
    `,
  }),
});

export const Vertical = meta.story({
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex h-5 items-center gap-2 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    `,
  }),
});
