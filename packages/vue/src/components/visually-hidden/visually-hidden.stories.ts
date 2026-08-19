import { Button } from "@pisagor/vue/button";
import { VisuallyHidden } from "@pisagor/vue/visually-hidden";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component:
          "Hides text from the screen while keeping it available to screen readers and other assistive technology.",
      },
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
