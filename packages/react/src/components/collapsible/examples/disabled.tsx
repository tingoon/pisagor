import { Button } from "@pisagor/react";
import { Collapsible } from "..";
export function Disabled() {
  return (
    <div>
      <Collapsible disabled>
        <Collapsible.Trigger asChild>
          <Button className="w-full" variant="outline">
            Disabled collapsible
            <Collapsible.Indicator />
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content className="pt-2">
          <p className="text-muted-foreground text-sm">
            This content cannot be accessed because the collapsible is
            unavailable.
          </p>
        </Collapsible.Content>
      </Collapsible>
    </div>
  );
}
