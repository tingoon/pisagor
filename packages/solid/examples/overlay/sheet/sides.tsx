import { Button, Sheet } from "@pisagor/solid";

export function Sides() {
  return (
    <div class="flex flex-wrap justify-center gap-2">
      <Sheet
        placement="right"
        title="Right placement sheet"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Right
          </Button>
        )}
      >
        <p class="text-muted-foreground text-sm">
          This sheet slides in from the right placement.
        </p>
      </Sheet>
      <Sheet
        placement="left"
        title="Left placement sheet"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Left
          </Button>
        )}
      >
        <p class="text-muted-foreground text-sm">
          This sheet slides in from the left placement.
        </p>
      </Sheet>
      <Sheet
        placement="top"
        title="Top placement sheet"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Top
          </Button>
        )}
      >
        <p class="text-muted-foreground text-sm">
          This sheet slides in from the top placement.
        </p>
      </Sheet>
      <Sheet
        placement="bottom"
        title="Bottom placement sheet"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Bottom
          </Button>
        )}
      >
        <p class="text-muted-foreground text-sm">
          This sheet slides in from the bottom.
        </p>
      </Sheet>
    </div>
  );
}
