import { Button, Sheet } from "@pisagor/react";

export function Sides() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Sheet
        placement="right"
        title="Right placement sheet"
        trigger={<Button variant="outline">Right</Button>}
      >
        <p className="text-muted-foreground text-sm">
          This sheet slides in from the right placement.
        </p>
      </Sheet>
      <Sheet
        placement="left"
        title="Left placement sheet"
        trigger={<Button variant="outline">Left</Button>}
      >
        <p className="text-muted-foreground text-sm">
          This sheet slides in from the left placement.
        </p>
      </Sheet>
      <Sheet
        placement="top"
        title="Top placement sheet"
        trigger={<Button variant="outline">Top</Button>}
      >
        <p className="text-muted-foreground text-sm">
          This sheet slides in from the top placement.
        </p>
      </Sheet>
      <Sheet
        placement="bottom"
        title="Bottom placement sheet"
        trigger={<Button variant="outline">Bottom</Button>}
      >
        <p className="text-muted-foreground text-sm">
          This sheet slides in from the bottom.
        </p>
      </Sheet>
    </div>
  );
}
