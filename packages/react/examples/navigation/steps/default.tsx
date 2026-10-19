import { Steps } from "@pisagor/react";

const panel = "flex h-full items-center justify-center rounded-md border";

const items = [1, 2, 3].map((step) => ({
  content: <p className="text-muted-foreground text-sm">Step {step}</p>,
  value: `step-${step}`,
}));

export function Default() {
  return (
    <Steps
      className="size-full"
      classNames={{ completedContent: panel, content: panel }}
      completedContent={
        <p className="text-muted-foreground text-sm">All steps completed.</p>
      }
      items={items}
    />
  );
}
