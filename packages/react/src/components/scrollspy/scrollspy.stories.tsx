import { Button, ScrollArea, Scrollspy } from "@pisagor/react";
import { useRef } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Scrollspy,
  parameters: {
    docs: {
      aliases: ["scroll-spy"],
      api: "closed",
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
          "Highlights navigation links to show which section is currently visible while scrolling.",
      },
      taxonomy: "pattern",
    },
  },
  title: "Components/Navigation/Scroll Spy",
});

export const Default = meta.story({
  render: () => {
    const parentRef = useRef<HTMLDivElement>(null);

    return (
      <div className="flex w-full grow gap-5">
        <div className="flex w-[150px] flex-col gap-2">
          <Scrollspy className="flex flex-col gap-2.5" offset={50} targetRef={parentRef}>
            {verticalSections.map((item) => (
              <Button
                className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                data-scrollspy-anchor={item.id}
                key={item.id}
                variant="outline"
              >
                {item.label}
              </Button>
            ))}
          </Scrollspy>
        </div>

        <div className="grow" ref={parentRef}>
          <ScrollArea className="-me-5 h-[500px] grow pe-5">
            <div className="space-y-8">
              {verticalSections.map((item) => (
                <div className="space-y-2.5" id={item.id} key={item.id}>
                  <h3 className="text-base text-foreground">{item.label}</h3>
                  <div className="h-[350px] rounded-2xl bg-muted" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  },
});

export const Horizontal = meta.story({
  render: () => {
    const parentRef = useRef<HTMLDivElement>(null);

    return (
      <div className="w-full space-y-5">
        <div className="flex w-full gap-2">
          <Scrollspy className="flex gap-2.5" offset={50} targetRef={parentRef}>
            {horizontalSections.map((item) => (
              <Button
                className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                data-scrollspy-anchor={item.id}
                key={item.id}
                variant="outline"
              >
                {item.label}
              </Button>
            ))}
          </Scrollspy>
        </div>

        <div className="w-full" ref={parentRef}>
          <ScrollArea className="h-[400px] grow">
            <div className="space-y-8">
              {horizontalSections.map((item) => (
                <div className="space-y-2.5" id={item.id} key={item.id}>
                  <h3 className="text-base text-foreground">{item.label}</h3>
                  <div className="h-[350px] rounded-2xl bg-muted" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  },
});

const verticalSections = [
  { id: "section-1", label: "Section 1" },
  { id: "section-2", label: "Section 2" },
  { id: "section-3", label: "Section 3" },
  { id: "section-4", label: "Section 4" },
  { id: "section-5", label: "Section 5" },
];

const horizontalSections = [
  { id: "section-6", label: "Section 1" },
  { id: "section-7", label: "Section 2" },
  { id: "section-8", label: "Section 3" },
  { id: "section-9", label: "Section 4" },
  { id: "section-10", label: "Section 5" },
];
