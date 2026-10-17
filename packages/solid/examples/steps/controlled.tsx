import { Button, Steps } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const items = [
    {
      content: "Please provide your name and email address.",
      title: "Your details",
    },
    { content: "A few details about your company.", title: "Company details" },
    {
      content: "Start collaborating with your team.",
      title: "Invite your team",
    },
  ];
  const [step, setStep] = createSignal(0);

  return (
    <div class="flex flex-col gap-2">
      <Steps
        class="w-full"
        count={items.length}
        onStepChange={(details) => setStep(details.step)}
        step={step()}
      >
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item index={index}>
              <Steps.Trigger>
                <Steps.Indicator>{index + 1}</Steps.Indicator>
                <Steps.Title>{item.title}</Steps.Title>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        {items.map((item, index) => (
          <Steps.Content index={index}>
            <p class="text-muted-foreground">{item.content}</p>
          </Steps.Content>
        ))}

        <Steps.CompletedContent>
          <p class="text-muted-foreground">All steps completed.</p>
        </Steps.CompletedContent>
      </Steps>
      <div class="flex gap-2">
        <Button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          variant="outline"
        >
          Back
        </Button>
        <Button onClick={() => setStep((s) => Math.min(items.length, s + 1))}>
          Next
        </Button>

        <Button onClick={() => setStep(0)} variant="ghost">
          Reset
        </Button>
      </div>
    </div>
  );
}
