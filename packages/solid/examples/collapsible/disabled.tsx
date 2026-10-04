/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid";
import { Collapsible } from "@pisagor/solid/collapsible";
export function Disabled() {
  return (
    <div>
      <Collapsible disabled>
        <Collapsible.Trigger
          asChild={(props) => (
            <Button {...props()} class="w-full" variant="outline">
              Disabled collapsible
              <Collapsible.Indicator />
            </Button>
          )}
        />
        <Collapsible.Content class="pt-2">
          <p class="text-muted-foreground text-sm">
            This content cannot be accessed because the collapsible is
            unavailable.
          </p>
        </Collapsible.Content>
      </Collapsible>
    </div>
  );
}
