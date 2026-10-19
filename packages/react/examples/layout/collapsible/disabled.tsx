import { Button, Collapsible } from "@pisagor/react";

export function Disabled() {
  return (
    <div>
      <Collapsible.Root disabled>
        <Collapsible.Trigger asChild>
          <Button className="w-full" variant="outline">
            Disabled collapsible
            <Collapsible.Indicator />
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Collapsible.Body className="pt-2">
            <p className="text-muted-foreground text-sm">
              This content cannot be accessed because the collapsible is
              unavailable.
            </p>
          </Collapsible.Body>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
}
