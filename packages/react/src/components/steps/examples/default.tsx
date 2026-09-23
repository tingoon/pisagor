import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { Steps } from "..";
export function Default() {
  const steps = Array.from({ length: 3 }, (_, index) => index + 1);
  return (
    <Steps className="size-full" count={steps.length}>
      <Steps.List>
        {steps.map((step) => (
          <Steps.Item index={step - 1} key={step}>
            <Steps.Trigger>
              <Steps.Indicator>{step}</Steps.Indicator>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
      {steps.map((step) => (
        <Steps.Content
          className="flex h-full items-center justify-center rounded-md border"
          index={step - 1}
          key={step}
        >
          <p className="text-muted-foreground text-sm">Step {step}</p>
        </Steps.Content>
      ))}

      <Steps.CompletedContent className="flex h-full items-center justify-center rounded-md border">
        <p className="text-muted-foreground text-sm">All steps completed.</p>
      </Steps.CompletedContent>
      <div className="flex flex-row-reverse gap-2">
        <Steps.NextTrigger asChild>
          <Button>
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
    </Steps>
  );
}
