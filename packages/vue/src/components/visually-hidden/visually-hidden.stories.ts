import { Button, VisuallyHidden } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component:
          "Hides text from the screen while keeping it available to screen readers and other assistive technology.",
      },
    },
    metadata: {
      aliases: ["screenreader-only", "sr-only"],
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Utilities/Visually Hidden",
});

export const Default = meta.story({
  render: () => ({
    components: { Button, VisuallyHidden },
    template: `
      <Button size="icon-md" variant="outline">
        <span aria-hidden="true">×</span>
        <VisuallyHidden>Close</VisuallyHidden>
      </Button>
    `,
  }),
});
