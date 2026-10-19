<script lang="ts" setup>
import { PhCaretDown } from "@phosphor-icons/vue";
import { Button, Card, Clipboard, Collapsible } from "@pisagor/vue";
</script>

<template>
  <Card class="w-80">
    <Card.Header>
      <Card.Title>Getting started</Card.Title>
      <Card.Description>We'll help you get started</Card.Description>
    </Card.Header>

    <Card.Content>
      <Collapsible.Root>
        <Collapsible.Trigger as-child>
          <Button class="w-full" variant="outline">
            View details
            <Collapsible.Indicator>
              <PhCaretDown />
            </Collapsible.Indicator>
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Collapsible.Body class="flex flex-col gap-2 p-2">
            <p class="text-muted-foreground text-sm">
              Here you can find the documentation for all the components and how
              to use them.
            </p>
            <Collapsible.Root>
              <Collapsible.Trigger as-child>
                <Button class="w-full" size="sm" variant="outline">
                  Install dependencies
                  <Collapsible.Indicator>
                    <PhCaretDown />
                  </Collapsible.Indicator>
                </Button>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Collapsible.Body class="flex flex-col gap-2 p-2">
                  <p class="text-muted-foreground text-sm">
                    Copy the following code:
                  </p>

                  <div class="relative">
                    <pre
                      class="bg-muted text-muted-foreground rounded-md p-2 text-xs"
                    ><code>bun add ui</code></pre>
                    <Clipboard
                      button-size="icon-sm"
                      button-variant="ghost"
                      class="absolute inset-e-1.5 top-0.5"
                      value="bun add ui"
                      variant="button"
                    />
                  </div>
                </Collapsible.Body>
              </Collapsible.Content>
            </Collapsible.Root>
          </Collapsible.Body>
        </Collapsible.Content>
      </Collapsible.Root>
    </Card.Content>
  </Card>
</template>
