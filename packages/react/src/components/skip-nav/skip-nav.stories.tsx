import { SkipNav } from "@pisagor/react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: SkipNav.Link,
  parameters: {
    docs: {
      aliases: ["skip-link"],
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Lets keyboard users jump past repetitive navigation straight to the main content.",
      },
      taxonomy: "standard",
    },
  },
  title: "Components/Navigation/Skip Nav",
});

export const Default = meta.story({
  render: () => (
    <>
      <SkipNav.Link className="focus:absolute" id="demo-content" />

      <SkipNav.Content
        className="rounded-lg border bg-card p-4 focus:ring-2"
        id="demo-content"
        tabIndex={undefined}
      >
        <h2 className="mb-2 font-semibold">Main content</h2>
        <p className="text-muted-foreground text-sm">
          This is the main content area. When users press Tab and then Enter on the skip link, focus
          jumps here.
        </p>
      </SkipNav.Content>
    </>
  ),
});
