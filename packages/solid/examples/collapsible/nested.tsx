/** @jsxImportSource solid-js */
import { Button, Card, Clipboard, Collapsible } from "@pisagor/solid";
export function Nested() {
  return (
    <Card class="w-80">
      <Card.Header
        description="We'll help you get started"
        title="Getting started"
      />

      <Card.Content>
        <Collapsible>
          <Collapsible.Trigger
            asChild={(props) => (
              <Button {...props()} class="w-full" variant="outline">
                View details
                <Collapsible.Indicator />
              </Button>
            )}
          />
          <Collapsible.Content class="flex flex-col gap-2 p-2">
            <p class="text-muted-foreground text-sm">
              Here you can find the documentation for all the components and how
              to use them.
            </p>
            <Collapsible>
              <Collapsible.Trigger
                asChild={(props) => (
                  <Button
                    {...props()}
                    class="w-full"
                    size="sm"
                    variant="outline"
                  >
                    Install dependencies
                    <Collapsible.Indicator />
                  </Button>
                )}
              />
              <Collapsible.Content class="flex flex-col gap-2 p-2">
                <p class="text-muted-foreground text-sm">
                  Copy the following code:
                </p>

                <pre class="relative rounded-md bg-muted p-2 text-muted-foreground text-xs">
                  <code>bun add ui</code>

                  <Clipboard
                    buttonSize="icon-sm"
                    buttonVariant="ghost"
                    class="absolute inset-e-1.5 top-0.5"
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
