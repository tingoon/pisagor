import { CaretDownIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Card, Clipboard, Collapsible } from "@pisagor/solid";

export function Nested() {
  return (
    <Card class="w-80">
      <Card.Header>
        <Card.Title>Getting started</Card.Title>
        <Card.Description>We'll help you get started</Card.Description>
      </Card.Header>

      <Card.Content>
        <Collapsible.Root>
          <Collapsible.Trigger
            asChild={(props) => (
              <Button {...props()} class="w-full" variant="outline">
                View details
                <Collapsible.Indicator>
                  <CaretDownIcon />
                </Collapsible.Indicator>
              </Button>
            )}
          />
          <Collapsible.Content>
            <Collapsible.Body class="flex flex-col gap-2 p-2">
              <p class="text-muted-foreground text-sm">
                Here you can find the documentation for all the components and
                how to use them.
              </p>
              <Collapsible.Root>
                <Collapsible.Trigger
                  asChild={(props) => (
                    <Button
                      {...props()}
                      class="w-full"
                      size="sm"
                      variant="outline"
                    >
                      Install dependencies
                      <Collapsible.Indicator>
                        <CaretDownIcon />
                      </Collapsible.Indicator>
                    </Button>
                  )}
                />
                <Collapsible.Content>
                  <Collapsible.Body class="flex flex-col gap-2 p-2">
                    <p class="text-muted-foreground text-sm">
                      Copy the following code:
                    </p>

                    <pre class="bg-muted text-muted-foreground relative rounded-md p-2 text-xs">
                      <code>bun add ui</code>

                      <Clipboard
                        buttonSize="icon-sm"
                        buttonVariant="ghost"
                        class="absolute inset-e-1.5 top-0.5"
                        value="bun add ui"
                        variant="button"
                      />
                    </pre>
                  </Collapsible.Body>
                </Collapsible.Content>
              </Collapsible.Root>
            </Collapsible.Body>
          </Collapsible.Content>
        </Collapsible.Root>
      </Card.Content>
    </Card>
  );
}
