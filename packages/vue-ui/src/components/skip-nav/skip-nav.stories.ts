import { SkipNav } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: SkipNav.Link,
  parameters: {
    docs: {
      description: {
        component:
          "Lets keyboard users jump past repetitive navigation straight to the main content.",
      },
    },
    metadata: {
      aliases: ["skip-link"],
      api: "compound",
      taxonomy: "standard",
    },
  },
  title: "Components/Navigation/Skip Nav",
});

export const Default = meta.story({
  render: () => ({
    components: { SkipNav },
    template: `
      <SkipNav.Link class="focus:absolute" id="demo-content" />
      <SkipNav.Content
        class="rounded-lg border bg-card p-4 focus:ring-2"
        id="demo-content"
        :tab-index="undefined"
      >
        <h2 class="mb-2 font-semibold">Main content</h2>
        <p class="text-muted-foreground text-sm">
          This is the main content area. When users press Tab and then Enter on the skip link, focus jumps here.
        </p>
      </SkipNav.Content>
    `,
  }),
});
