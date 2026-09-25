import { For } from "solid-js";
import { CaretLeftIcon, CaretRightIcon } from "../../../internal/icons";
import { Button } from "../../button";
import { Steps } from "../index";

export function Default() {
  const steps = [1, 2, 3];

  return (
    <Steps class="size-full" count={steps.length}>
      <Steps.List>
        <For each={steps}>
          {(step) => (
            <Steps.Item index={step - 1}>
              <Steps.Trigger>
                <Steps.Indicator>{step}</Steps.Indicator>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          )}
        </For>
      </Steps.List>
      <For each={steps}>
        {(step) => (
          <Steps.Content
            class="flex h-full items-center justify-center rounded-md border"
            index={step - 1}
          >
            <p class="text-muted-foreground text-sm">Step {step}</p>
          </Steps.Content>
        )}
      </For>
      <Steps.CompletedContent class="flex h-full items-center justify-center rounded-md border">
        <p class="text-muted-foreground text-sm">All steps completed.</p>
      </Steps.CompletedContent>
      <div class="flex flex-row-reverse gap-2">
        <Steps.NextTrigger
          asChild={(props) => (
            <Button {...props()}>
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
    </Steps>
  );
}
