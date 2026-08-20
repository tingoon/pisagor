import { Button, Presence } from "@pisagor/react";
import { cn } from "@pisagor/utils";
import { useState } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Presence,
  parameters: {
    docs: {
      api: "closed",
      description: {
        component:
          "Animates elements in and out of the tree so enter and exit transitions feel smooth.",
      },
      taxonomy: "primitive",
    },
  },
  title: "Components/Utilities/Presence",
});

export const Default = meta.story({
  render: () => {
    const [present, setPresent] = useState(false);

    return (
      <div className="relative">
        <Button onClick={() => setPresent(!present)} variant="outline">
          Toggle
        </Button>
        <Presence asChild present={present}>
          <div
            className={cn(
              "absolute bottom-full left-1/2 mb-2 -translate-x-1/2",
              "px-4 py-2",
              "bg-muted",
              "text-sm",
              "rounded-md border",
              "origin-bottom",
              "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:slide-out-to-bottom-5 data-[state=closed]:animate-out",
              "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:slide-in-from-bottom-5 data-[state=open]:animate-in",
            )}
          >
            Content
          </div>
        </Presence>
      </div>
    );
  },
});
