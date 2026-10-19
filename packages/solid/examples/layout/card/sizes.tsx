import { Card } from "@pisagor/solid";
import { For } from "solid-js";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-4">
      <For each={sizes}>
        {(size) => (
          <Card size={size}>
            <Card.Header>
              <Card.Title>Card header</Card.Title>
              <Card.Description>{`Size ${size}`}</Card.Description>
            </Card.Header>
            <Card.Content>
              <p class="text-muted-foreground text-sm">Card content</p>
            </Card.Content>
          </Card>
        )}
      </For>
    </div>
  );
}
