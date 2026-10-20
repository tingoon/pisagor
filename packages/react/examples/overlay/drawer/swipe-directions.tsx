import { Button, Drawer } from "@pisagor/react";

export function SwipeDirections() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Drawer
        swipeDirection="down"
        title="Bottom drawer"
        trigger={<Button variant="outline">Bottom</Button>}
      >
        <p className="text-muted-foreground text-sm">
          Swipe down to close this drawer.
        </p>
      </Drawer>
      <Drawer
        swipeDirection="up"
        title="Top drawer"
        trigger={<Button variant="outline">Top</Button>}
      >
        <p className="text-muted-foreground text-sm">
          Swipe up to close this drawer.
        </p>
      </Drawer>
      <Drawer
        swipeDirection="start"
        title="Start drawer"
        trigger={<Button variant="outline">Left</Button>}
      >
        <p className="text-muted-foreground text-sm">
          Swipe left to close this drawer.
        </p>
      </Drawer>
      <Drawer
        swipeDirection="end"
        title="End drawer"
        trigger={<Button variant="outline">Right</Button>}
      >
        <p className="text-muted-foreground text-sm">
          Swipe right to close this drawer.
        </p>
      </Drawer>
    </div>
  );
}
