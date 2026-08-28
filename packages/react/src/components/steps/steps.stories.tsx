import {
  CaretLeftIcon,
  CaretRightIcon,
  CircleNotchIcon,
  CreditCardIcon,
  HardDriveIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import preview from "#/storybook/preview";
import { Button, Steps } from "..";

const meta = preview.meta({
  component: Steps,
  parameters: {
    docs: {
      description: {
        component: "Guides users through a multi-step flow and shows which stage they are on.",
      },
    },
    metadata: {
      aliases: ["stepper", "wizard"],
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    CompletedContent: Steps.CompletedContent,
    Content: Steps.Content,
    Description: Steps.Description,
    Indicator: Steps.Indicator,
    Item: Steps.Item,
    List: Steps.List,
    NextTrigger: Steps.NextTrigger,
    PrevTrigger: Steps.PrevTrigger,
    Separator: Steps.Separator,
    Title: Steps.Title,
    Trigger: Steps.Trigger,
  },
  title: "Components/Navigation/Steps",
});

export const Default = meta.story({
  render: () => {
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
  },
});

export const Icon = meta.story({
  render: () => {
    const items = [
      { icon: UserIcon, id: "user" },
      { icon: HardDriveIcon, id: "drive" },
      { icon: CreditCardIcon, id: "card" },
    ];
    return (
      <Steps count={items.length}>
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item index={index} key={item.id}>
              <Steps.Trigger>
                <Steps.Indicator>
                  <item.icon />
                </Steps.Indicator>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>
      </Steps>
    );
  },
});

export const Vertical = meta.story({
  render: () => {
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
  },
});

export const Loading = meta.story({
  render: () => {
    const items = [
      { id: "step-1", loading: true },
      { id: "step-2", loading: false },
      { id: "step-3", loading: false },
    ];
    return (
      <Steps count={items.length}>
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item index={index} key={item.id}>
              <Steps.Trigger disabled>
                <Steps.Indicator>
                  {item.loading ? <CircleNotchIcon className="animate-spin" /> : index + 1}
                </Steps.Indicator>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>
      </Steps>
    );
  },
});

export const Description = meta.story({
  render: () => {
    const items = [
      { description: "Personal", title: "Info" },
      { description: "Company", title: "Docs" },
      { description: "Create", title: "Team" },
    ];
    return (
      <Steps count={items.length}>
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item index={index} key={item.title}>
              <Steps.Trigger>
                <Steps.Indicator>{index + 1}</Steps.Indicator>
                <div className="flex flex-col items-start gap-1">
                  <Steps.Title>{item.title}</Steps.Title>
                  <Steps.Description>{item.description}</Steps.Description>
                </div>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>
      </Steps>
    );
  },
});

export const Title = meta.story({
  render: () => {
    const items = ["Info", "Docs", "Team"];
    return (
      <Steps count={items.length}>
        <Steps.List>
          {items.map((item, index) => (
            <Steps.Item index={index} key={item}>
              <Steps.Trigger>
                <Steps.Indicator>{index + 1}</Steps.Indicator>
                <Steps.Title>{item}</Steps.Title>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>
      </Steps>
    );
  },
});

export const Controlled = meta.story({
  render: () => {
    const items = [
      {
        content: "Please provide your name and email address.",
        title: "Your details",
      },
      { content: "A few details about your company.", title: "Company details" },
      { content: "Start collaborating with your team.", title: "Invite your team" },
    ];
    const [step, setStep] = useState(0);

    return (
      <div className="flex flex-col gap-2">
        <Steps
          className="w-full"
          count={items.length}
          onStepChange={(details) => setStep(details.step)}
          step={step}
        >
          <Steps.List>
            {items.map((item, index) => (
              <Steps.Item index={index} key={item.title}>
                <Steps.Trigger>
                  <Steps.Indicator>{index + 1}</Steps.Indicator>
                  <Steps.Title>{item.title}</Steps.Title>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>

          {items.map((item, index) => (
            <Steps.Content index={index} key={item.title}>
              <p className="text-muted-foreground">{item.content}</p>
            </Steps.Content>
          ))}

          <Steps.CompletedContent>
            <p className="text-muted-foreground">All steps completed.</p>
          </Steps.CompletedContent>
        </Steps>
        <div className="flex gap-2">
          <Button onClick={() => setStep((s) => Math.max(0, s - 1))} variant="outline">
            Back
          </Button>
          <Button onClick={() => setStep((s) => Math.min(items.length, s + 1))}>Next</Button>

          <Button onClick={() => setStep(0)} variant="ghost">
            Reset
          </Button>
        </div>
      </div>
    );
  },
});
