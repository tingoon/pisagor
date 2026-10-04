/** @jsxImportSource solid-js */
import { Button, Sheet } from "@pisagor/solid";
export function Sides() {
  return (
    <div class="flex flex-wrap justify-center gap-2">
      <Sheet>
        <Sheet.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Right
            </Button>
          )}
        />
        <Sheet.Content placement="right">
          <Sheet.Header>
            <Sheet.Title>Right placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p class="text-muted-foreground text-sm">
              This sheet slides in from the right placement.
            </p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Left
            </Button>
          )}
        />
        <Sheet.Content placement="left">
          <Sheet.Header>
            <Sheet.Title>Left placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p class="text-muted-foreground text-sm">
              This sheet slides in from the left placement.
            </p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Top
            </Button>
          )}
        />
        <Sheet.Content placement="top">
          <Sheet.Header>
            <Sheet.Title>Top placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p class="text-muted-foreground text-sm">
              This sheet slides in from the top placement.
            </p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Bottom
            </Button>
          )}
        />
        <Sheet.Content placement="bottom">
          <Sheet.Header>
            <Sheet.Title>Bottom placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p class="text-muted-foreground text-sm">
              This sheet slides in from the bottom.
            </p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
    </div>
  );
}
