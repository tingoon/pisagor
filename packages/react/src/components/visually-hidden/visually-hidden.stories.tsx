import preview from "#/storybook/preview";
import { Button, VisuallyHidden } from "..";

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
  render: () => (
    <Button aria-label="Close" size="icon-md" variant="outline">
      <span aria-hidden="true">×</span>
      <VisuallyHidden>Close</VisuallyHidden>
    </Button>
  ),
});
