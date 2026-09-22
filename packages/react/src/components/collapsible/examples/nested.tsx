import { Button, Card, Clipboard } from "@pisagor/react";
import { Collapsible } from "..";
export function Nested() {
  return (
    <Card className="w-80">
      <Card.Header description="We'll help you get started" title="Getting started" />

      <Card.Content>
        <Collapsible>
          <Collapsible.Trigger asChild>
            <Button className="w-full" variant="outline">
              View details
              <Collapsible.Indicator />
            </Button>
          </Collapsible.Trigger>
          <Collapsible.Content className="flex flex-col gap-2 p-2">
            <p className="text-muted-foreground text-sm">
              Here you can find the documentation for all the components and how to use them.
            </p>
            <Collapsible>
              <Collapsible.Trigger asChild>
                <Button className="w-full" size="sm" variant="outline">
                  Install dependencies
                  <Collapsible.Indicator />
                </Button>
              </Collapsible.Trigger>
              <Collapsible.Content className="flex flex-col gap-2 p-2">
                <p className="text-muted-foreground text-sm">Copy the following code:</p>

                <pre className="relative rounded-md bg-muted p-2 text-muted-foreground text-xs">
                  <code>bun add ui</code>

                  <Clipboard
                    buttonSize="icon-sm"
                    buttonVariant="ghost"
                    className="absolute inset-e-1.5 top-0.5"
                    value="bun add ui"
                    variant="button"
                  />
                </pre>
              </Collapsible.Content>
            </Collapsible>
          </Collapsible.Content>
        </Collapsible>
      </Card.Content>
    </Card>
  );
}
