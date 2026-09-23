import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { Steps } from "..";
export function Vertical() {
  const items = [
    { description: "Personal", title: "Info" },
    { description: "Company", title: "Docs" },
    { description: "Create", title: "Team" },
  ];
  return (
    <Steps className="h-64" count={items.length} orientation="vertical">
      <Steps.List>
        {items.map((item, index) => (
          <Steps.Item index={index} key={item.title}>
            <Steps.Trigger>
              <Steps.Indicator>{index + 1}</Steps.Indicator>
              <span className="flex flex-col items-start gap-1">
                <Steps.Title>{item.title}</Steps.Title>
                <Steps.Description>{item.description}</Steps.Description>
              </span>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
      <div className="flex flex-1 flex-col gap-2">
        {items.map((item, index) => (
          <Steps.Content
            className="flex h-full items-center justify-center rounded-md border"
            index={index}
            key={item.title}
          >
            <p className="text-muted-foreground">{item.description}</p>
          </Steps.Content>
        ))}
        <Steps.CompletedContent className="flex h-full items-center justify-center rounded-md border">
          <p className="text-muted-foreground">Completed</p>
        </Steps.CompletedContent>
        <div className="flex flex-row-reverse gap-2">
          <Steps.NextTrigger asChild>
            <Button variant="outline">
              Next
              <CaretRightIcon />
            </Button>
          </Steps.NextTrigger>
          <Steps.PrevTrigger asChild>
            <Button variant="outline">
              <CaretLeftIcon />
              Back
            </Button>
          </Steps.PrevTrigger>
        </div>
      </div>
    </Steps>
  );
}
