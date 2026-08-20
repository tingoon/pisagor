import { Button, VisuallyHidden } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: VisuallyHidden,
  parameters: {
    docs: {
      aliases: ["screenreader-only", "sr-only"],
      api: "closed",
      checklist: {
        accessibleColor: true,
      },
      description: {
        component:
          "Hides text from the screen while keeping it available to screen readers and other assistive technology.",
      },
      taxonomy: "primitive",
    },
  },
  title: "Components/Utilities/Visually Hidden",
});

export const Default = meta.story({
  render: () => (
    <Button size="icon-md" variant="outline">
      <span aria-hidden="true">×</span>
      <VisuallyHidden>Close</VisuallyHidden>
    </Button>
  ),
});
