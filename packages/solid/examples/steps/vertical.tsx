/** @jsxImportSource solid-js */

import { Button, Steps } from "@pisagor/solid";
import { CaretLeftIcon, CaretRightIcon } from "@pisagor/solid/icons";
export function Vertical() {
  const items = [
    { description: "Personal", title: "Info" },
    { description: "Company", title: "Docs" },
    { description: "Create", title: "Team" },
  ];
  return (
    <Steps class="h-64" count={items.length} orientation="vertical">
      <Steps.List>
        {items.map((item, index) => (
          <Steps.Item index={index}>
            <Steps.Trigger>
              <Steps.Indicator>{index + 1}</Steps.Indicator>
              <span class="flex flex-col items-start gap-1">
                <Steps.Title>{item.title}</Steps.Title>
                <Steps.Description>{item.description}</Steps.Description>
              </span>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
      <div class="flex flex-1 flex-col gap-2">
        {items.map((item, index) => (
          <Steps.Content
            class="flex h-full items-center justify-center rounded-md border"
            index={index}
          >
            <p class="text-muted-foreground">{item.description}</p>
          </Steps.Content>
        ))}
        <Steps.CompletedContent class="flex h-full items-center justify-center rounded-md border">
          <p class="text-muted-foreground">Completed</p>
        </Steps.CompletedContent>
        <div class="flex flex-row-reverse gap-2">
          <Steps.NextTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                Next
                <CaretRightIcon />
              </Button>
            )}
          />
          <Steps.PrevTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                <CaretLeftIcon />
                Back
              </Button>
            )}
          />
        </div>
      </div>
    </Steps>
  );
}
